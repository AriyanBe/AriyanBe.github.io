# Ariyan Behrouz — academic portfolio

A static Next.js App Router site built with TypeScript, React, Tailwind CSS, and locally authored MDX. The design combines an engraved natural-history plate with restrained academic typography. No affiliations, findings, awards, or credentials are invented.

## Develop

Use Node.js 22.13+ or 24 LTS.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Content and review

See [EDITING.md](EDITING.md) for centralized content fields, scientific figures, privacy, and draft publication controls. The October 2026 update is on `codex/academic-portfolio-update` for local review only. See [UPDATE_REVIEW.md](UPDATE_REVIEW.md) for the audit and verification record.

`npm run build` exports to `out/`; `npm run verify` checks routes, links, metadata, drafts, and restricted assets. `npm start` previews the export locally. The existing GitHub Pages workflow deploys on pushes to `main`, so do not push there before publication approval.
