# Masoud Khodadadi — Editorial Portfolio

A lightweight Persian RTL portfolio for software engineering, architecture and AI-native product development.

## Pages and data

- `index.html` — introduction, **five curated projects**, methodology, expertise, contact.
- `projects.html` — **nine-project archive**, category filtering, project-detail dialogs.
- `app.js` — shared PROJECTS catalog for both pages. The `featuredHome` flag controls homepage selection.
- `styles.css` — editorial visuals and responsive layout.
- `assets/` — original user portrait and source-owned real brand/logo/favicon assets.
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

Push an immutable Docker image to `reg.goldexsoft.ir/masoud-portfolio:<tag>`. On production use `IMAGE_TAG=<tag>` to pull/up only `masoud-portfolio` on the existing compose network, keeping the prior image for rollback. Verify healthy status and both public routes. Other services and shared reverse proxy must remain untouched.

## Content and design

Keep claims grounded in source material, distinguish implementation from production launch, omit internal credentials and confidential information. See `.matemcp/skills/portfolio-design/SKILL.md`.
