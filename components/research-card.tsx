import Link from "next/link";
import { ResearchIllustration } from "./research-illustration";
import type { ResearchEntry } from "@/data/research";
export function ResearchCard({
  item,
  index,
}: {
  item: ResearchEntry;
  index: number;
}) {
  return (
    <Link href={`/research/${item.slug}/`} className="research-card">
      <span className="card-index">
        0{index + 1} / {item.title.toUpperCase()}
      </span>
      <ResearchIllustration kind={item.icon} />
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <div className="card-foot">
        <span>Research overview</span>
        <span>↗</span>
      </div>
    </Link>
  );
}
