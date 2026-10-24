# Editing the academic portfolio

The palette, typography, scientific plate, portrait, and component layout are preserved. This update is local on `codex/academic-portfolio-update`; do not push to main or publish without approval.

- `data/profile.ts`: name, university, research identity, hero disciplines, biography, email, GitHub, portrait, and canonical origin. No graduation or current enrollment claim was added.
- `data/research.ts`: the three independent dossiers, status, questions, methods, prospective methods, tools, findings, limitations, figures, and authorized affiliations. Unknown collaborator names stay empty. The single-cell route remains `/research/single-cell-genomics/` to preserve existing links; its displayed name is Single-Cell Transcriptomics.
- `data/outputs.ts`: the official poster title, institutional link, event, author, and date. Shared by the homepage and codon dossier. This is a poster, not a journal paper.
- `data/timeline.ts`: supported research milestones. Do not add speculative degree dates or clinical credentials.
- `data/projects.ts`: active projects and their links, scope, technology, status, and screenshots. PubMD remains Concept / Planning. The homepage takes the first two entries.
- `data/skills.ts`: six categories separating languages, software, methods, and environments. Add only tools actually used; prospective methods belong in the relevant dossier instead.
- `data/interests.ts`: eight consolidated interest cards and five interactive branches, including regenerative medicine within translational interests.
- `app/cv/page.tsx`: intentionally email-only, per the latest instruction. No PDF or detailed CV is published.
- `content/notes/`: Markdown/MDX sources for Reflections, including the published preface and six unpublished outlines. Public URLs use `/reflections/[slug]/`; the source directory is retained. Keep `draft: true` until the author has written and reviewed the entry. Draft dates are planning dates, not publication claims.

## Publishing Reflections

Create a `.md` or `.mdx` file in `content/notes/`. Its filename is its permanent slug. Use quoted `title` and `date` (`YYYY-MM-DD`), a free-form `category`, optional `description`, `draft: true`, and `references: []` (or title/url reference objects). Categories can be Aphorism, Thought, Essay, Meditation, Literary Note, Scientific Reflection, Preface, or any other text; no code change is required. Change `draft` to `false` only when ready to publish. Only an explicit boolean `draft: false` publishes an entry; missing or malformed values remain private. Drafts are excluded from listings, both sets of static routes, and the sitemap.

Entries under 220 words omit reading time; longer entries use 220 words per minute. The listing remains newest first, with a persistent link above it to `the-first-page` when published. Keep original dates and filenames when revising entries. Markdown/MDX and frontmatter remain the portable archive.

Old `/notes/` URLs export HTML refresh redirects with fallback links, canonical Reflections URLs, and `noindex`. GitHub Pages cannot issue server-side HTTP redirects. Only published entries receive legacy redirects.

## Figures and privacy

Approved figures live in `public/images/Research/`; provide actual intrinsic dimensions, descriptive alt text, and a caption in the dossier. Scientific names are rendered by `components/scientific-text.tsx`. Do not overwrite original figures to hide analytical issues.

Four single-cell assets and an unrelated Darwin portrait were moved to ignored `.private-review/research-assets/`. They are excluded from the export and Git additions. Do not move them back to `public/` without permission and source/rights review. Existing repository history or an already published site is not changed by this local update.

## Checks

Run `npm run build`, `npm run typecheck`, `npm run lint`, and `npm run verify`. The export check rejects retired routes, public confidentiality placeholders, unapproved research assets, broken local links/anchors, and published draft routes. `npm start` serves `out/` locally on port 4173.
