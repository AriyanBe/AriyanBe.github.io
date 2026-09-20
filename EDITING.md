# Editing the portfolio

The approved layout, serif hierarchy, dark palette, and components are independent of the content. Edit the data below rather than duplicating facts in page components.

## Personal identity — `data/profile.ts`

- **Name:** change the `name` constant. Headings, monogram, portrait alternative text, metadata, founder credit, and copyright use it.
- **University:** change the `university` constant. Education, role, introduction, and biography reference it.
- **Biography:** edit the `biography` array. Each entry has a `heading` and an array of `paragraphs`. Edit `introduction`, `description`, and `goal` for the homepage introduction, search/social summary, and professional direction. Maintain the distinction between an undergraduate, research interests, and a future physician-scientist aspiration.
- **GitHub:** change `github`. This is the only definition of the profile URL. Footer, contact, and the general computational-biology link use it. The Science Lens repository is derived from this base in `data/projects.ts`.
- **Email:** set `email` to the final public address. Leave `""` to hide the contact row and email links. No email address is inferred.
- **CV:** place a PDF in `public/`, then set `cv` to its root-relative path, such as `/files/ariyan-behrouz-cv.pdf`. Leave `""` to hide the download button. The CV page still displays the verified education and research summary.
- **Portrait:** the original photograph is copied unchanged to `public/images/portrait/ariyan-behrouz.jpg`. `portrait` contains that URL; `portraitWidth` and `portraitHeight` contain its intrinsic dimensions (1122 × 1402). For a replacement, update all three fields. The About page preserves the full aspect ratio, including on mobile, without applying a color filter or crop.
- **Site origin:** the default is `https://ariyanbe.github.io`. Set `NEXT_PUBLIC_SITE_URL` before building for a different host; update the same variable in `.github/workflows/static.yml` when changing the deployment domain.
- **Copyright year:** edit `copyrightYear` (currently 2026).

## Research — `data/research.ts`

The array order controls the homepage and Research index numbering:

1. `comparative-genomics` — Comparative Genomics & Evolution
2. `single-cell-genomics` — Single-Cell Genomics
3. `codon-usage-bias` — Codon Usage & Codon Bias

Each entry produces its own `/research/<slug>/` route. Do not merge the codon-bias project into comparative genomics. Do not assign the codon-bias project the Tetrahymena study system or another project's methods without confirmed information.

Edit `title`, `category`, `summary`, `organism`, `question`, `background`, `methods`, `methodsNote`, `tools`, `topics`, `status`, `currentStatus`, `results`, `interpretation`, and `future`. Keep actual methodology in `methods` and broader subject concepts in `topics`. Distinguish tools used or being used from completed analyses and verified findings.

Unknown project-specific facts are empty strings or arrays. `researchEmpty` holds the short neutral messages displayed in empty dossier sections. The study-system label is hidden when `organism` is empty. `collaborators`, `institution`, `dates`, and `publicationStatus` are reserved data fields and currently not rendered; all are intentionally empty. Do not infer them from university enrollment or another dossier.

`figures` accepts objects with `title`, `src`, `alt`, `caption`, `width`, and `height`. Put verified images in `public/images/research/`, then use root-relative paths in `src`. No mock scientific results are displayed. Interpretations and results should be added only when verified and appropriate to share.

Choose the decorative icon with `icon`: `phylogeny`, `cells`, or `codons`. The line illustrations are implemented in `components/research-illustration.tsx`. Their illustrative sequences and shapes are not research data.

## Projects and destinations — `data/projects.ts`

Edit `title`, `subtitle`, `description`, `motivation`, `scope`, `tags`, `technology`, `status`, `github`, `website`, and `screenshots` here. A project title links to its internal dossier; **Open project** goes to `website`, then `github`, falling back to the internal dossier when both are empty. Empty external links, technology lists, and development statuses are hidden rather than rendered as promises.

- SignRounds: `website` is `https://signrounds.com/`; the founder name comes from `profile.name`.
- Science Lens: `github` is derived as `${profile.github}/Science-Lense`. Preserve the repository's actual spelling. Its description identifies it as a Zotero extension and does not promise unverified capabilities.
- Computational Biology Work: `github` references the shared profile and is explicitly described as a profile link.

External links open in a new tab with `noopener noreferrer`. A screenshot entry is a path to an image in `public/`. Add only accurate technology, milestones, and implementation claims.

## Skills — `data/skills.ts`

Edit each category's `title`, `description`, and `items`. These lists include codon usage/bias, genomics, single-cell analysis, computing, and development. Do not add proficiency percentages or imply certifications.

## Interests — `data/interests.ts`

Edit the `interests` array (`title`, `symbol`, `description`, `href`, `link`) to change the cabinet's cards and related links. The `branches` array controls the interactive tree's descriptions and destinations. Write interests as curiosity or research directions, not clinical credentials.

## Education and direction — `data/timeline.ts`

This summary is reused by About and CV. Education references `profile.university`; the research summary references the independent dossiers. Add dates, degrees, and affiliations only when confirmed.

## Copyright — `data/copyright.ts`

Edit the original-materials notice and its scope here. The footer and `/copyright/` use the same notice, with the name/year from the profile. Third-party materials, open-source libraries, public-domain works, scientific facts/data, and material not owned by the author remain excluded.

## Writing — `content/notes/`

Copy the template from `content/templates/research-note.mdx`. Set title, quoted ISO date, category, description, references, and `draft`. Draft entries are excluded from public routes. The README covers figures and footnotes.

## Validate changes

Use Node.js 22.13+ or 24 LTS:

```sh
npm run lint
npm run typecheck
npm run build
npm run verify
npm start
```

Preview at `http://127.0.0.1:4173/`. Check all three research cards and dossiers, portrait, project links, contact, CV, copyright, mobile navigation, and the interests cabinet. The production export is in `out/`.
