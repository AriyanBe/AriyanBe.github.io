import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Tags } from "@/components/tags";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = projects.find((p) => p.slug === slug);
  if (!item) return {};
  return pageMetadata(item.title, item.description, `/projects/${slug}/`, true);
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = projects.find((p) => p.slug === slug);
  if (!item) notFound();
  return (
    <div className="wrap page-shell">
      <Link className="back-link" href="/projects/">
        ← Project catalogue
      </Link>
      <div className="page-intro">
        <Tags items={item.tags} />
        <h1>{item.title}</h1>
        <p className="page-description">{item.subtitle}</p>
        {item.status && <p className="status-label">{item.status}</p>}
      </div>
      <div className="dossier-grid">
        <aside className="project-meta">
          <p className="eyebrow">PROJECT RECORD</p>
          {item.technology.length > 0 && (
            <>
              <h3>Technology</h3>
              <Tags items={item.technology} />
            </>
          )}
          {(item.github || item.website) && <h3>Links</h3>}
          {item.github && (
            <a
              className="text-link"
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          )}
          {item.website && (
            <a
              className="text-link"
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website ↗
            </a>
          )}
        </aside>
        <div className="prose dossier-body">
          <section>
            <h2>The project</h2>
            <p>{item.description}</p>
          </section>
          <section>
            <h2>The motivation</h2>
            <p>{item.motivation}</p>
          </section>
          <section>
            <h2>Scope & direction</h2>
            <p>{item.scope}</p>
          </section>
          <section>
            <h2>Inside the project</h2>
            {item.screenshots.length ? (
              item.screenshots.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${item.title} screenshot ${i + 1}`}
                  width={1200}
                  height={800}
                />
              ))
            ) : (
              <figure className="figure-placeholder">
                <span>PROJECT DOCUMENTATION</span>
                <strong>
                  {slug === "computational-biology"
                    ? "Pipelines & repository catalogue"
                    : "Screenshots & walkthrough"}
                </strong>
                <figcaption>
                  Documentation will be added as it becomes available.
                </figcaption>
              </figure>
            )}
          </section>
          {item.status && (
            <section>
              <h2>Development status</h2>
              <p>{item.status}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
