import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { research, researchEmpty } from "@/data/research";
import { Tags } from "@/components/tags";
export function generateStaticParams() {
  return research.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = research.find((p) => p.slug === slug);
  if (!item) return {};
  return pageMetadata(item.title, item.summary, `/research/${slug}/`, true);
}
export default async function ResearchDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = research.find((p) => p.slug === slug);
  if (!item) notFound();
  return (
    <div className="wrap page-shell">
      <Link className="back-link" href="/research/">
        ← Research index
      </Link>
      <div className="page-intro dossier-intro">
        <p className="eyebrow">RESEARCH DOSSIER · {item.category}</p>
        <h1>{item.title}</h1>
        <p className="page-description">{item.summary}</p>
        <p className="status-label">{item.status}</p>
      </div>
      <div className="dossier-grid">
        <aside className="dossier-aside">
          {item.organism && (
            <>
              <p className="eyebrow">STUDY SYSTEM</p>
              <p>{item.organism}</p>
            </>
          )}
          <nav aria-label="Dossier contents">
            {[
              "Research Question",
              "Background",
              "Methods",
              "Figures",
              "Results",
              "Interpretation",
              "Current Status",
              "Future Directions",
            ].map((label, i) => (
              <a
                href={`#${label.toLowerCase().replaceAll(" ", "-")}`}
                key={label}
              >
                <span>0{i + 1}</span> {label}
              </a>
            ))}
          </nav>
        </aside>
        <div className="prose dossier-body">
          <section id="research-question">
            <h2>Research question</h2>
            <p className="placeholder-copy">
              {item.question || researchEmpty.question}
            </p>
          </section>
          <section id="background">
            <h2>Background</h2>
            <p>{item.background}</p>
          </section>
          <section id="methods">
            <h2>Methods & instruments</h2>
            <p>{item.methodsNote}</p>
            <ul>
              {item.methods.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            {item.tools.length > 0 && <Tags items={item.tools} />}
            <Tags items={item.topics} />
          </section>
          <section id="figures">
            <h2>Figures</h2>
            {item.figures.length === 0 && <p>{researchEmpty.figures}</p>}
            <div className="figure-grid">
              {item.figures.map((f, i) => (
                <figure key={f.src}>
                  <span>
                    FIG. 0{i + 1} · {f.title}
                  </span>
                  <Image
                    src={f.src}
                    alt={f.alt}
                    width={f.width}
                    height={f.height}
                  />
                  <figcaption>{f.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
          <section id="results">
            <h2>Results</h2>
            <p>{item.results || researchEmpty.results}</p>
          </section>
          <section id="interpretation">
            <h2>Interpretation</h2>
            <p>{item.interpretation || researchEmpty.interpretation}</p>
          </section>
          <section id="current-status">
            <h2>Current status</h2>
            <p>{item.currentStatus}</p>
          </section>
          <section id="future-directions">
            <h2>Future directions</h2>
            <p>{item.future || researchEmpty.future}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
