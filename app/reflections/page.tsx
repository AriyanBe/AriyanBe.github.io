import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { getNotes, formatDate } from "@/lib/notes";

const introduction = "Thoughts on life, consciousness, science, philosophy, literature, and the human condition. A collection of questions, observations, and ideas.";
export const metadata = pageMetadata("Reflections", introduction, "/reflections/");

export default function Reflections() {
  const reflections = getNotes();
  const preface = reflections.find((entry) => entry.slug === "the-first-page");
  return (
    <div className="wrap page-shell">
      <PageIntro number="VI" label="THE COMMONPLACE BOOK" title="Reflections." description={introduction} />
      {preface && (
        <p className="editorial-note reflection-preface">
          Begin with the preface: <Link className="text-link" href={`/reflections/${preface.slug}/`}>{preface.title} →</Link>
        </p>
      )}
      <div className="notes-list">
        {reflections.length ? reflections.map((entry) => (
          <article className="note-entry" key={entry.slug}>
            <div className="note-date">
              <time dateTime={entry.date}>{formatDate(entry.date)}</time>
              <span>{entry.category}</span>
            </div>
            <div>
              <h2><Link href={`/reflections/${entry.slug}/`}>{entry.title}</Link></h2>
              {entry.description && <p>{entry.description}</p>}
              <Link className="text-link" href={`/reflections/${entry.slug}/`}>Read reflection <span>→</span></Link>
            </div>
            {entry.readingTime !== null && <span className="reading-time">{entry.readingTime} min read</span>}
          </article>
        )) : <p>No reflections have been published here yet.</p>}
      </div>
    </div>
  );
}
