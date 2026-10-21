# Portfolio Design & Delivery Skill

This site's identity is an editorial engineering-notebook: parchment (#f4f3ee), charcoal (#151a16), ink (#20231e), restrained lime (#c7f173), large Persian typography, intentional spacing and precise rules. Avoid generic glassmorphism, long rows of skill badges, fake code mockups or repetitive layouts.

## Content and information architecture
- `index.html` is the concise personal landing page. Exactly a curated subset of roughly five strong projects appears here.
- `projects.html` owns the comprehensive filterable portfolio list.
- `app.js` PROJECTS is the single shared project-data source; `featuredHome` selects homepage cards. Keep case-study dialogs available on both pages.
- Describe actual verified problems, individual role, architecture decisions and outcome; avoid invented figures.
- Never list an unlaunched project as a finished/public portfolio item. Do not include RankingSystem until the user approves launch.
- Distinguish ITAM Windows-agent hardware/asset monitoring from MeetFlow's system monitoring.
- SmartPlaque: GIS/WFS, Parcel/Unit, configurable attributes and discrepancy reporting.
- Real logos and icons copied from source workspaces to `assets`: use source-owned media, never fabricate screenshots.
- Public URLs must be real; municipal service sites may require internal access or authentication.

## UX and verification
- RTL and mobile first; test 320, 390, 768, 900 and 1440px viewports and prevent horizontal scrolling.
- Semantic landmarks, keyboard focus visibility, native detail dialogs with Escape and focus restoration, accurate filter counts, touch targets, and mobile nav inert when closed.
- Persist theme without breaking light/dark contrast; honor reduced-motion preferences.
- Contact is mailto and copy-email, not a simulated form submission.
- QA: node --check app.js; git diff --check; docker build and /healthz; screenshot and click-test home/archive, filters, dialogs, dark mode and mobile menu.
- Push immutable Docker tag and latest, preserve server rollback and recreate **only** portfolio container on the existing external network; verify live HTTPS home and archive. Commit and push source.
