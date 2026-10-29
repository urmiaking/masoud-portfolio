FROM nginx:stable-alpine
ARG VCS_REF=local
LABEL org.opencontainers.image.source="https://github.com/urmiaking/masoud-portfolio"
LABEL org.opencontainers.image.revision=$VCS_REF
COPY nginx-site.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY projects.html /usr/share/nginx/html/projects.html
COPY app.js /usr/share/nginx/html/app.js
COPY styles.css /usr/share/nginx/html/styles.css
COPY assets/ /usr/share/nginx/html/assets/
RUN printf '%s\n' "$VCS_REF" > /usr/share/nginx/html/revision.txt
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD wget -q -O /dev/null http://127.0.0.1/healthz || exit 1
