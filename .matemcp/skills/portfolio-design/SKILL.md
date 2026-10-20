# Portfolio Design & Deployment Skill

This repository uses an editorial engineering-notebook visual identity: parchment (#f4f3ee), charcoal (#151a16), ink (#20231e), restrained lime (#c7f173). Prefer large Persian typography, clear rules and space to gradient pills, glass cards, fake code illustrations and dashboard aesthetics. Keep an authentic portrait; CSS geometric project artwork is a deliberate alternative to invented screenshots.

Present Software Engineer / Solution Architect and AI-Native development while preserving demonstrated .NET specialization. Case studies describe verified problem, role, technical decisions and actual outcome. Do not invent numbers or expose internal domains, credentials or sensitive information.

UX quality rules: semantic landmarks, focus visibility, native dialog with Escape/focus restoration, aria-pressed project filters, mobile nav inert when closed, responsive at 320/390/768/1440px, no horizontal overflow, reduced-motion support, functioning theme control. Do not use a fake contact success state: email uses mailto.

Before deploy: node --check app.js; git diff --check; docker image build; localhost /healthz test; browser screenshots desktop/mobile; test project filter, detail dialog, dark theme, mobile menu; push immutable image & latest; back up previous live image; replace only portfolio container using the existing compose/network; confirm healthy and public content; commit/push source. Never disrupt other shared nginx services.
