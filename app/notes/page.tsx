import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { getNotes, formatDate } from "@/lib/notes";
export const metadata = pageMetadata(
  "Field Notes",
  "A commonplace book about biology, evolution, medicine, scientific history, books, and research.",
  "/notes/",
);
export default function Notes() {
  const notes = getNotes();
  return (
    <div className="wrap page-shell">
      <PageIntro
        number="VI"
        label="THE COMMONPLACE BOOK"
        title="Field Notes."
        description="Observations, questions, and ideas at the edges of science. A notebook to return to."
      />
      <div className="notes-list">
        {notes.length ? (
          notes.map((note) => (
            <article className="note-entry" key={note.slug}>
              <div className="note-date">
                <time dateTime={note.date}>{formatDate(note.date)}</time>
                <span>{note.category}</span>
              </div>
              <div>
                <h2>
                  <Link href={`/notes/${note.slug}/`}>{note.title}</Link>
                </h2>
                <p>{note.description}</p>
                <Link className="text-link" href={`/notes/${note.slug}/`}>
                  Read note <span>→</span>
                </Link>
              </div>
              <span className="reading-time">{note.readingTime} min read</span>
            </article>
          ))
        ) : (
          <p>New field notes will appear here.</p>
        )}
      </div>
      <p className="editorial-note">
        On the notebook’s horizon: evolution, biological research, medicine,
        books, and the history of scientific ideas.
      </p>
    </div>
  );
}
