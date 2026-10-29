#!/usr/bin/env bash
# Run only for trusted master commits on the dedicated production runner.
set -Eeuo pipefail

sha="${RELEASE_SHA:?RELEASE_SHA is required}"
[[ "$sha" =~ ^[a-f0-9]{40}$ ]] || { echo 'Invalid release SHA' >&2; exit 1; }
registry='reg.goldexsoft.ir/masoud-portfolio'
image="$registry:$sha"
deploy_dir="${PORTFOLIO_DEPLOY_DIR:-/var/lib/masoud-portfolio-deploy}"
candidate="masoud-portfolio-check-${GITHUB_RUN_ID:-local}-${GITHUB_RUN_ATTEMPT:-1}"
previous_image="$(docker inspect masoud-portfolio --format '{{.Config.Image}}')"
previous_tag="${previous_image##*:}"
previous_ip="$(docker inspect masoud-portfolio --format '{{(index .NetworkSettings.Networks "goldex-network").IPAddress}}')"
deployment_started=0
release_verified=0

compose() {
  docker compose --project-name masoud-portfolio --file "$deploy_dir/docker-compose.yml" "$@"
}
wait_healthy() {
  local container="$1"
  for attempt in {1..40}; do
    local status
    status="$(docker inspect "$container" --format '{{.State.Health.Status}}' 2>/dev/null || true)"
    [[ "$status" == healthy ]] && return 0
    [[ "$status" == unhealthy ]] && break
    sleep 2
  done
  docker logs --tail 35 "$container" >&2 || true
  return 1
}
refresh_proxy() {
  # The existing proxy resolves its upstream when workers start. Re-resolve only
  # when Docker changed this service's address; keep the shared config intact.
  local current_ip
  current_ip="$(docker inspect masoud-portfolio --format '{{(index .NetworkSettings.Networks "goldex-network").IPAddress}}')"
  if [[ "$current_ip" != "$previous_ip" ]]; then
    docker exec nginx nginx -t
    docker exec nginx nginx -s reload
    previous_ip="$current_ip"
  fi
}
cleanup() {
  local result=$?
  trap - EXIT
  docker rm -f "$candidate" >/dev/null 2>&1 || true
  if (( result != 0 && deployment_started == 1 && release_verified == 0 )); then
    echo "Release failed; restoring $previous_image" >&2
    if IMAGE_TAG="$previous_tag" compose up -d --no-deps --pull never masoud-portfolio && wait_healthy masoud-portfolio && refresh_proxy; then
      printf 'IMAGE_TAG=%s\n' "$previous_tag" > "$deploy_dir/.env"
      echo 'Previous release restored.' >&2
    else
      echo 'ROLLBACK FAILED: production needs attention.' >&2
    fi
  fi
  exit "$result"
}
trap cleanup EXIT

docker build --build-arg "VCS_REF=$sha" --tag "$image" .
docker run --detach --name "$candidate" "$image" >/dev/null
wait_healthy "$candidate"
docker exec "$candidate" nginx -t
for route in / /projects.html /app.js /styles.css /assets/icons.svg /assets/fonts/fonts.css; do
  docker exec "$candidate" wget -q -O /dev/null "http://127.0.0.1$route"
done
[[ "$(docker exec "$candidate" wget -qO- http://127.0.0.1/revision.txt)" == "$sha" ]]
docker push "$image"

mkdir -p "$deploy_dir"
install -m 644 docker-compose.yml "$deploy_dir/docker-compose.yml"
printf '%s\n' "$previous_image" > "$deploy_dir/previous-image"
deployment_started=1
IMAGE_TAG="$sha" compose up -d --no-deps --pull never masoud-portfolio
wait_healthy masoud-portfolio
refresh_proxy

# Check the actual HTTPS virtual host as well as the container.
actual="$(curl --fail --silent --show-error --retry 4 --retry-all-errors --retry-delay 2 --max-time 20 "https://masoudkhodadadi.ir/revision.txt?release=$sha")"
[[ "$actual" == "$sha" ]] || { echo "Public revision mismatch: $actual" >&2; exit 1; }
for route in / /projects.html /assets/icons.svg /assets/fonts/fonts.css; do
  curl --fail --silent --show-error --retry 2 --retry-all-errors --max-time 20 --output /dev/null "https://masoudkhodadadi.ir$route"
done
printf 'IMAGE_TAG=%s\n' "$sha" > "$deploy_dir/.env"
release_verified=1
docker tag "$image" "$registry:latest"
docker push "$registry:latest"
printf 'Verified production release: %s\n' "$sha"
