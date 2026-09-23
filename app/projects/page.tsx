import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Tags } from "@/components/tags";
import { projects } from "@/data/projects";
export const metadata = pageMetadata(
  "Projects",
  `SignRounds, Science Lens, and computational biology tools by ${profile.name}.`,
  "/projects/",
);
export default function Projects() {
  return (
    <div className="wrap page-shell">
      <PageIntro
        number="III"
        label="THE INVENTOR’S CABINET"
        title="Ideas, put to work."
        description="Tools for medical education, deliberate scientific reading, and reproducible biological inquiry. For more information and access to other projects, contact me."
      />
      <div className="project-catalogue">
        {projects.map((p, i) => (
          <article key={p.slug} className="project-sheet">
            <div className="project-sheet-top">
              <span className="eyebrow">CATALOGUE NO. 0{i + 1}</span>
              <span className="project-glyph" aria-hidden="true">
                {["↔", "⌕", "⌘"][i]}
              </span>
            </div>
            <Tags items={p.tags} />
            <h2>
              <Link className="project-card-link" href={`/projects/${p.slug}/`}>{p.title}</Link>
            </h2>
            <p>{p.description}</p>
            {p.status && <p className="status-label">{p.status}</p>}
            {p.website || p.github ? (
              <a
                className="text-link"
                href={p.website || p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open project ↗
              </a>
            ) : (
              <Link className="text-link" href={`/projects/${p.slug}/`}>
                Open project ↗
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
