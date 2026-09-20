import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/page-intro";
import { Tags } from "@/components/tags";
import { skills } from "@/data/skills";
export const metadata = pageMetadata(
  "Skills & Instruments",
  "A catalogue of computational biology, programming, research, and development tools.",
  "/skills/",
);
export default function Skills() {
  return (
    <div className="wrap page-shell">
      <PageIntro
        number="IV"
        label="THE INSTRUMENT CATALOGUE"
        title="Tools of inquiry."
        description="Languages, methods, and environments for examining biological systems and building useful things."
      />
      <div className="skills-grid">
        {skills.map((s) => (
          <section className="skill-entry" key={s.title}>
            <span className="entry-number">{s.number}</span>
            <h2>{s.title}</h2>
            <p>{s.description}</p>
            <Tags items={s.items} />
          </section>
        ))}
      </div>
      <p className="editorial-note">
        A catalogue of tools and areas of practice. Project pages provide
        context as specific workflows are documented.
      </p>
    </div>
  );
}
