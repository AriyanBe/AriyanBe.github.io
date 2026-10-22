import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { research, researchEmpty } from "@/data/research";
import { Tags } from "@/components/tags";
import { ScientificText } from "@/components/scientific-text";
import { ResearchOutput } from "@/components/research-output";
export function generateStaticParams() { return research.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
 const { slug } = await params;
 const item = research.find(p => p.slug === slug);
 return item ? pageMetadata(item.title, item.summary, `/research/${slug}/`, true) : {};
}
export default async function ResearchDetail({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const item = research.find(p => p.slug === slug);
 if (!item) notFound();
 const sections = ["Research Question", "Background", "Methods", "Computational Tools", "Results", "Figures", "Interpretation", "Limitations", "Current Status", "Future Directions", "Research Outputs"];
 return <div className="wrap page-shell">
  <Link className="back-link" href="/research/">← Research index</Link>
  <div className="page-intro dossier-intro">
   <p className="eyebrow">RESEARCH DOSSIER · {item.category}</p>
   <h1>{item.title}</h1><p className="page-description"><ScientificText>{item.projectTitle}</ScientificText></p>
   <p><ScientificText>{item.summary}</ScientificText></p><p className="status-label">{item.status}</p>
  </div>
  <div className="dossier-grid">
   <aside className="dossier-aside">
    <p className="eyebrow">STUDY SYSTEM</p><p><ScientificText>{item.organism}</ScientificText></p>
    {item.institution && <p>{item.institution}</p>}{item.dates && <p>{item.dates}</p>}
    {item.collaborators && <p>{item.collaborators}</p>}
    <nav aria-label="Dossier contents">{sections.map((label,i) => <a key={label} href={`#${label.toLowerCase().replaceAll(" ", "-")}`}><span>{String(i+1).padStart(2,"0")}</span> {label}</a>)}</nav>
   </aside>
   <div className="prose dossier-body">
    <section id="research-question"><h2>Research question</h2><p><ScientificText>{item.question}</ScientificText></p></section>
    <section id="background"><h2>Scientific background</h2><p><ScientificText>{item.background}</ScientificText></p></section>
    <section id="methods"><h2>Methods</h2><p>{item.methodsNote}</p><ul>{item.methods.map(m => <li key={m}>{m}</li>)}</ul>
     {item.plannedMethods.length > 0 && <><h3>Prospective approaches</h3><ul>{item.plannedMethods.map(m => <li key={m}>{m}</li>)}</ul></>}
    </section>
    <section id="computational-tools"><h2>Computational tools</h2><Tags items={item.tools} /></section>
    <section id="results"><h2>Research progress & findings</h2><p><ScientificText>{item.results}</ScientificText></p></section>
    <section id="figures"><h2>Figures & visualizations</h2>
     {!item.figures.length && <p>{researchEmpty.figures}</p>}
     <div className="figure-grid">{item.figures.map((f,i) => <figure key={f.src}>
      <span>FIG. {String(i+1).padStart(2,"0")} · {f.title}</span>
      <a href={f.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${f.title}`}><Image src={f.src} alt={f.alt} width={f.width} height={f.height} /></a>
      <figcaption><ScientificText>{f.caption}</ScientificText></figcaption>
     </figure>)}</div>
    </section>
    <section id="interpretation"><h2>Interpretation</h2><p>{item.interpretation}</p></section>
    <section id="limitations"><h2>Limitations</h2><p>{item.limitations}</p></section>
    <section id="current-status"><h2>Current status</h2><p>{item.currentStatus}</p></section>
    <section id="future-directions"><h2>Future directions</h2><p>{item.future}</p></section>
    <section id="research-outputs"><h2>Posters & research outputs</h2>{item.outputIds.includes("codon-poster") ? <ResearchOutput /> : <p>{item.publicationStatus}</p>}</section>
   </div>
  </div>
 </div>;
}
