import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { ResearchIllustration } from "@/components/research-illustration";
import { ScientificText } from "@/components/scientific-text";
import { Tags } from "@/components/tags";
import { research, researchIntro, researchDescription } from "@/data/research";
export const metadata = pageMetadata("Research", researchDescription, "/research/");
export default function Research() {
  return (
    <div className="wrap page-shell">
      <PageIntro
        number="II"
        label="IN THE LABORATORY"
        title="Lines of inquiry."
        description={researchIntro}
      />
      <div className="catalogue">
        {research.map((item, i) => (
          <article className="catalogue-entry" key={item.slug}>
            <span className="entry-number">0{i + 1}</span>
            <div>
              <p className="eyebrow">
                0{i + 1} / {item.title.toUpperCase()}
              </p>
              <ResearchIllustration kind={item.icon} />
              <h2>
                <Link href={`/research/${item.slug}/`}>{item.title}</Link>
              </h2>
              <p><ScientificText>{item.summary}</ScientificText></p>
              <Tags items={item.topics.slice(0, 4)} />
              <p className="status-label">{item.status}</p>
            </div>
            <Link className="text-link" href={`/research/${item.slug}/`}>
              Read research dossier ↗
            </Link>
          </article>
        ))}
      </div>
      <p className="editorial-note">
        Each dossier distinguishes completed work, ongoing analysis, and prospective methods. Public research outputs are linked where available; unpublished findings remain withheld.
      </p>
    </div>
  );
}
