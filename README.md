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

The static website is exported to `out/`. Run `npm start` to preview the static export at http://127.0.0.1:4173.

## Edit your information

| File                | Content                                                               |
| ------------------- | --------------------------------------------------------------------- |
| `data/profile.ts`   | Name, introduction, email, GitHub, portrait, CV, canonical origin     |
| `data/research.ts`  | Research questions, methods, figures, results, interpretation, status |
| `data/projects.ts`  | Project descriptions, tags, technologies, status, URLs, screenshots   |
| `data/skills.ts`    | Four groups of skills and tools                                       |
| `data/interests.ts` | Expandable scientific-interest cards                                  |
| `data/timeline.ts`  | Education and research details                                        |
| `content/notes/`    | Published Markdown and MDX journal entries                            |

See `EDITING.md` for exact content-editing instructions. Email and CV controls are hidden when their configuration values are empty. The portrait is displayed without cropping or color alteration.

The three independent research dossiers distinguish experience and ongoing work from findings. Update status explicitly to completed, work in progress, or future direction as appropriate. Replace the figure placeholders with verified figures before claiming results. Project screenshots accept local paths in `public/`.

## Field Notes

Copy `content/templates/research-note.mdx` into `content/notes/your-slug.mdx`. Set title, quoted ISO date (`YYYY-MM-DD`), category, description, and `draft: false` when ready. Drafts are excluded from the index, generated pages, and sitemap. The introductory note is an opening page, not a fabricated research essay.

Markdown supports headings, lists, tables, links, and footnotes. MDX also supports `<Figure src="/figure.webp" alt="Descriptive alternative text" caption="Figure caption" width="1200" height="800" />`. Add reference objects with `title` and `url` to the `references` frontmatter list. Reading time is calculated automatically. Only author-controlled local MDX is compiled; never add untrusted uploaded MDX.

## Deployment

Pushing to `main` runs `.github/workflows/static.yml`: install dependencies, lint, check TypeScript, build, verify, and deploy `out/` to GitHub Pages at https://ariyanbe.github.io/. You can also run the workflow manually from GitHub Actions. The canonical origin is configured in `data/profile.ts` and explicitly set by the workflow through `NEXT_PUBLIC_SITE_URL`.

The old `site/` implementation is replaced by the current Next.js source. Local hosting registrations in `.openai/` are excluded from Git. No credentials belong in the repository.

## Design and accessibility

Shared tokens and responsive rules live in `app/globals.css`; reusable elements live in `components/`. The site uses semantic landmarks, a skip link, visible focus states, accessible disclosure buttons, mobile navigation, reduced-motion support, and locally served imagery. The interest tree is explicitly a conceptual map, not a phylogenetic inference.

The visual theme evokes a dark private scientific study: near-black canvas, forest-green research surfaces, selective walnut and mahogany, warm ivory text, and restrained brass details. Palette tokens are centralized at the top of `app/globals.css`. Print styles retain a readable light-paper treatment.

The hero plate is an original AI-generated decorative engraving of brain anatomy, DNA, neurons, chromosomes, and evolutionary branches, not research evidence. Its optimized WebP is stored in `public/scientific-study-plate.webp`. The earlier botanical plate remains available for historical references. No external font or image service is needed at runtime.
