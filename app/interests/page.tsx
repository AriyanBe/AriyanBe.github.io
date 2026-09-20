import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/page-intro";
import { Cabinet } from "@/components/cabinet";
import { InterestTree } from "@/components/interest-tree";
export const metadata = pageMetadata(
  "Cabinet of Curiosities",
  `Explore ${profile.name}’s interests across evolution, genomics, neuroscience, medicine, and the history and philosophy of science.`,
  "/interests/",
);
export default function Interests() {
  return (
    <div className="wrap page-shell">
      <PageIntro
        number="V"
        label="SCIENTIFIC INTERESTS"
        title="A cabinet of curiosities."
        description="An evolving collection of questions and disciplines. Open a specimen card to look a little closer."
      />
      <Cabinet />
      <InterestTree />
    </div>
  );
}
