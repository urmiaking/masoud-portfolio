# Masoud Khodadadi — Editorial Portfolio

Static, RTL personal portfolio for software engineering, architecture, product delivery and AI-native development.

## Local preview

Run docker build -t masoud-portfolio:local . and docker run --rm -p 8787:80 masoud-portfolio:local, then visit http://localhost:8787.

## Production

Deploy immutable images to reg.goldexsoft.ir/masoud-portfolio. The service uses the existing goldex-network and shared Nginx reverse proxy at masoudkhodadadi.ir. Set IMAGE_TAG to the published immutable tag when running docker compose pull and up -d --no-build. Check /healthz. No separate host ports are published.

## Content and UX

Case studies are in the PROJECTS array of app.js, with problem, role, technical decisions and grounded outcome. Static HTML and CSS require no runtime framework. Includes filterable portfolio, native detail dialog, RTL keyboard navigation, persisted color theme and honest mailto contact. Do not introduce fake stats or publish internal infrastructure. See .matemcp/skills/portfolio-design/SKILL.md.
