import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { ResearchIllustration } from "@/components/research-illustration";
import { Tags } from "@/components/tags";
import { research, researchIntro } from "@/data/research";
export const metadata = pageMetadata("Research", researchIntro, "/research/");
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
              <p>{item.summary}</p>
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
        These dossiers describe research experiences. Other research projects are private, for more information contact me. Methods
        and interests are distinguished from verified findings; no unreported
        scientific conclusions are implied.
      </p>
    </div>
  );
}
