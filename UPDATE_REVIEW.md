# Academic portfolio update — review record

Prepared October 22, 2026 on `codex/academic-portfolio-update`. Changes are uncommitted and local. No push or deployment was performed. The approved design, scientific hero engraving, portrait, navigation, and three independent research experiences remain intact.

## Changes and new content

- Reframed the profile around evolutionary genomics, computational biology, and transcriptomics without claiming graduation or a new degree. Rewrote About into three connected sections. Updated research milestones using supported dates only.
- Expanded all three dossiers with study systems, questions, background, methods, computational tools, progress, figures, interpretation, limitations, status, future directions, and outputs. Kept the existing single-cell URL for backward compatibility while renaming its displayed title.
- Comparative genomics now describes six Tetrahymena species, approximately 9,916 single-copy orthogroups from the completed OrthoFinder run, and ongoing CAFE5 work. The earlier outgroup is historical context only. OrthoMCL is explicitly prospective. No promised 2027 publication remains.
- Single-cell research covers SOX4, cholestatic liver disease, and scRNA-seq/snRNA-seq methods, while withholding detailed findings, collaborators, and laboratory affiliation. Pseudobulk is prospective.
- Codon work is marked completed undergraduate research. Preserved the three original plots, corrected their intrinsic dimensions, added descriptive captions and full-size links, and moderated causal interpretation.
- Added one centralized poster record, featured on the homepage and codon dossier. The official title is preserved, but it is clearly labeled as a poster rather than a journal publication.
- Science Lens now reflects documented Wikipedia lookup functionality and release status. The computational-work project links directly to the public Codon-Bias repository. Added PubMD as Concept / Planning, with two explicitly proposed modes and no operational claims.
- Reorganized skills into six categories, consolidated interests into eight cards without losing regenerative medicine or scientific computing, and corrected interest-tree links.
- Added six unpublished Field Notes outlines. The existing introductory note remains public; no complete essays were invented.
- Per the follow-up instruction, the CV is email-only: “For my CV, please contact me via email.” No clinical roles, credentials, expanded CV, or PDF were added.
- Extended static-export safeguards for removed routes, drafts, unapproved assets, and broken anchors. No dependencies were added.

## Removed SignRounds references

- `data/projects.ts`: honored the existing local removal of the project entry.
- `data/interests.ts`: removed the Medicine branch's retired link and label; it now links to About.
- `app/projects/page.tsx`: removed the name from metadata and updated the introduction.
- Homepage: its data-driven featured projects are now Science Lens and Computational Biology Work.
- Dynamic routes and sitemap: `/projects/signrounds/` is no longer generated. Export validation explicitly rejects it.
- No SignRounds-specific assets were found to remove. Source scans of public-facing content and export checks find no remaining references.

## Evidence and remaining factual checks

- [University of Houston institutional poster record](https://hdl.handle.net/10657/21202): verified official title, Ariyan Behrouz as author, and April 9, 2026 date. Event and institutional context follow the supplied brief. No supervisor has been invented or named without confirmation.
- [Science Lens](https://github.com/AriyanBe/Science-Lense): verified current README documents version 1.0.2, Zotero 10.0.x, Wikipedia definitions, JavaScript implementation, Python packaging, and manual updates. No screenshots were copied from papers or third-party material.
- [Codon-Bias](https://github.com/AriyanBe/Codon-Bias): verified Python/R methods and listed libraries in its README.
- Current degree status remains unverified; the public wording avoids a graduate/alumnus claim. Clinical experience and certification details are not needed for the requested email-only CV.
- OrthoMCL implementation, pseudobulk completion, and authorization for lab/supervisor names remain unconfirmed and are not represented as established experience or public attribution.
- The original ENC–GC3 plot displays ENC estimates below the conventional 20–61 range. Review the estimator and coding-sequence filters before stronger interpretation. The figure is unchanged and its caveat is public. This website task did not reanalyze the scientific data.
- The residual plot states that its values are scaled for visualization. Its dashed thresholds are not presented as verified significance cutoffs.

## Material kept out of publication

Moved the following intact into ignored `.private-review/research-assets/`, outside Next.js `public/` and the export:

- `2.0.png`
- `3.png`
- `Screenshot 2026-09-07 213431.png`
- `Img 1.png` (an additional single-cell analysis image found during audit)
- `images.jpg` (a Darwin portrait previously mislabeled as a research result; source/rights not established)

No private collaborator names or single-cell affiliation are rendered. Removing files from this local export does not remove earlier copies from Git history or the currently deployed website. Because publication was explicitly prohibited, the live site remains unchanged; review removal from the live site separately if urgent.

## Validation

- Production build: passed; 17 content routes, plus generated error routes.
- TypeScript: passed.
- ESLint: passed.
- MDX verification: passed.
- Static-export verification: passed for 20 HTML files, including titles/descriptions, one h1, main landmarks, internal links/assets, anchors, sitemap, draft exclusion, retired-route exclusion, and unapproved-asset exclusion.
- Desktop screenshots: homepage and codon dossier inspected; approved visual identity preserved.
- Mobile at 375×812: 13 affected routes checked; no horizontal overflow or broken loaded images.
- Narrow 320×800 check: homepage, codon dossier, PubMD, and Skills pass.
- Keyboard: mobile menu opens with Enter and closes on navigation; interest disclosure and Medicine branch operate with Enter; focus outline visible.
- Browser console: no captured errors during interaction checks.
- Accessibility checks cover the above semantics and interactions, not a full independent accessibility audit. No scientific data reanalysis or exhaustive third-party link crawling was performed.

## Modified and added files

- `.gitignore`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/cv/page.tsx`
- `app/globals.css`
- `app/page.tsx`
- `app/projects/[slug]/page.tsx`
- `app/projects/page.tsx`
- `app/research/[slug]/page.tsx`
- `app/research/page.tsx`
- `components/research-card.tsx`
- `components/research-output.tsx`
- `components/scientific-text.tsx`
- `content/notes/how-phylogenetic-trees-are-reconstructed.mdx`
- `content/notes/notes-on-becoming-a-physician-scientist.mdx`
- `content/notes/understanding-orthology.mdx`
- `content/notes/understanding-pseudobulk-analysis.mdx`
- `content/notes/what-single-cell-rna-sequencing-reveals.mdx`
- `content/notes/why-codon-usage-is-not-random.mdx`
- `data/interests.ts`
- `data/outputs.ts`
- `data/profile.ts`
- `data/projects.ts`
- `data/research.ts`
- `data/skills.ts`
- `data/timeline.ts`
- `EDITING.md`
- `next-env.d.ts`
- `public/images/Research/2.0.png`
- `public/images/Research/3.png`
- `public/images/Research/images.jpg`
- `public/images/Research/Img 1.png`
- `public/images/Research/Screenshot 2026-09-07 213431.png`
- `README.md`
- `scripts/verify-export.mjs`
- `UPDATE_REVIEW.md`
