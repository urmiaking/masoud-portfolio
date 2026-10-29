# Masoud Khodadadi — Editorial Portfolio

A lightweight Persian RTL portfolio for software engineering, architecture and AI-native product development.

## Pages and data

- `index.html` — introduction, **five curated projects**, methodology, expertise, contact.
- `projects.html` — **nine-project archive**, category filtering, project-detail dialogs.
- `app.js` — shared PROJECTS catalog for both pages. The `featuredHome` flag controls homepage selection.
- `styles.css` — editorial visuals and responsive layout.
- `assets/` — original user portrait and source-owned real brand/logo/favicon assets.
- `assets/icons.svg` — shared 24px outline icon set, with one stroke weight.
- `assets/fonts/` — locally hosted WOFF2 fonts, with their OFL licenses.
- `Dockerfile` / `docker-compose.yml` — static nginx, existing external goldex-network.

Current archive: GoldEx, Qirato, MeetFlow, SmartPlaque, ITAM, CitizenService, Ruzin, Etraab and hospital systems. Unlaunched RankingSystem is omitted. SmartPlaque uses the GIS Parcel/Unit model. ITAM is the independent enterprise Windows-agent hardware asset monitoring product and is not the MeetFlow monitoring feature.

## QA

```powershell
node --check app.js
docker build -t masoud-portfolio:local .
docker run --rm -p 8787:80 masoud-portfolio:local
```

Verify /, /projects.html, /healthz, filters, dialogs, image assets, light/dark mode, keyboard navigation and mobile menu.

## Release

Push to `master` to run [Build and deploy portfolio](.github/workflows/deploy.yml). Manual runs are also available on `master` in GitHub Actions. The workflow does not run pull requests on the production runner.

The dedicated `masoud-portfolio-production` runner is a systemd service running as `portfolio-runner` in `/opt/actions-runner-masoud`. It uses its own Docker credential file containing only the existing `reg.goldexsoft.ir` login; no SSH password or registry credential is committed to this repository or passed through workflow logs.

`scripts/release.sh` builds an image tagged with the full commit SHA, checks nginx and the candidate container's routes and health, then pushes to `reg.goldexsoft.ir/masoud-portfolio:<sha>`. It recreates only `masoud-portfolio` on `goldex-network` and checks the public HTTPS revision and routes before promoting `latest`. Deployment failures trigger a rollback to the previous image. Releases run serially.

Production compose and the active image tag are kept in `/var/lib/masoud-portfolio-deploy`. `/revision.txt` reports the deployed commit and disables caching; `/healthz` reports container health. The original server checkout at `/home/user/masoud-portfolio` is retained, while Actions uses its own Git checkout.

To restore the image recorded before the most recent deployment, run as `portfolio-runner` or an administrator:

```bash
cd /var/lib/masoud-portfolio-deploy
previous_image=$(cat previous-image)
previous_tag=${previous_image##*:}
IMAGE_TAG="$previous_tag" docker compose --project-name masoud-portfolio up -d --no-deps --pull never masoud-portfolio
printf 'IMAGE_TAG=%s\n' "$previous_tag" > .env
docker inspect masoud-portfolio --format '{{.State.Health.Status}}'
curl --fail https://masoudkhodadadi.ir/
```

Older images are retained locally for rollback. No release script prunes shared Docker resources or changes other services or proxy configuration. If Docker changes the portfolio container's IP, the release checks nginx configuration and gracefully reloads its workers so the existing upstream resolves the new address.

## Interaction and verification

The homepage keeps five curated projects; the archive starts with nine. Archive category filters show counts and persist in `?category=` with browser back support. Dialogs close with Escape, the close control or the backdrop and restore focus. Mobile navigation manages focus while open; theme choice persists and loads before first paint. Hero, filtering, menu and dialog motion respect `prefers-reduced-motion`, and content visibility never depends on an observer.

Release QA covers both routes at 320, 390, 768, 900 and 1440px, filter counts (2 products, 5 enterprise, 2 specialist), dialog controls, mobile keyboard navigation, clipboard, theme persistence and reduced motion. Automated axe WCAG A/AA checks cover both routes in light and dark mode. Run browser QA against production after the workflow succeeds, in addition to its container and public HTTP checks.

## Content and design

Keep claims grounded in source material, distinguish implementation from production launch, omit internal credentials and confidential information. See `.matemcp/skills/portfolio-design/SKILL.md`.
