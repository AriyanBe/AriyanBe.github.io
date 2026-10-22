import { codonPoster } from "@/data/outputs";
import { ScientificText } from "./scientific-text";
export function ResearchOutput() {
  return (
    <article>
      <p className="eyebrow">{codonPoster.type}</p>
      <h3><ScientificText>{codonPoster.title}</ScientificText></h3>
      <p>{codonPoster.author} · {codonPoster.institution}<br />{codonPoster.event} · <time dateTime={codonPoster.date}>{codonPoster.dateLabel}</time></p>
      <p>{codonPoster.note}</p>
      <a className="text-link" href={codonPoster.url} target="_blank" rel="noopener noreferrer">View institutional record ↗</a>
    </article>
  );
}
