import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { research } from "@/data/research";
import { ResearchCard } from "@/components/research-card";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  `${profile.name} — Biology, Research & Computation`,
  profile.description,
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-rule" /> A LIFE IN PURSUIT OF UNDERSTANDING
          </p>
          <h1>
            {profile.name.split(" ")[0]}
            <br />
            <em>{profile.name.split(" ").slice(1).join(" ")}</em>
            <span className="title-period">.</span>
          </h1>
          <p className="hero-disciplines">
            BIOLOGY <span>·</span> EVOLUTION <span>·</span> GENOMICS{" "}
            <span>·</span> MEDICINE
          </p>
          <p className="hero-intro">{profile.introduction}</p>
          <div className="hero-actions">
            <Link className="button" href="/research/">
              Explore my research <span>↗</span>
            </Link>
            <Link className="text-link" href="/about/">
              About me <span>→</span>
            </Link>
          </div>
        </div>
        <div className="hero-art">
          <div className="plate-head">
            <span>STUDIES IN THE LIVING WORLD</span>
          </div>
          <div className="illustration-space">
            <Image
              src="/scientific-study-plate.webp"
              alt="Victorian-style scientific engraving of an anatomical brain, DNA, neurons, chromosomes, and evolutionary branches"
              width={1200}
              height={800}
              priority
            />
          </div>
          <div className="plate-caption">
            <span>Fig. 01</span>
            <p>
              From the branching of life
              <br />
              to the patterns within.
            </p>
            <span className="plate-seal">{profile.initials}</span>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">I. IN THE LABORATORY</p>
            <h2>Lines of inquiry</h2>
          </div>
          <Link className="text-link" href="/research/">
            All research <span>↗</span>
          </Link>
        </div>
        <div className="research-grid">
          {research.map((item, index) => (
            <ResearchCard item={item} index={index} key={item.slug} />
          ))}
        </div>
      </section>
      <section className="statement">
        <div className="wrap statement-inner">
          <p className="eyebrow">THE THREAD THAT CONNECTS IT ALL</p>
          <h2>
            To understand life.
            <br />
            <em>And, one day, to help heal it.</em>
          </h2>
          <p>{profile.goal}</p>
          <Link className="text-link" href="/about/">
            More about my path <span>→</span>
          </Link>
        </div>
      </section>
      <section className="wrap section home-bottom">
        <div>
          <p className="eyebrow">II. THE INVENTOR’S CABINET</p>
          <h2>Ideas, put to work.</h2>
          <p>
            Tools for learning, scientific reading, and asking better biological
            questions.
          </p>
          {projects.slice(0, 2).map((project) => (
            <Link
              className="project-row"
              href={`/projects/${project.slug}/`}
              key={project.slug}
            >
              <span>
                <small>{project.tags.slice(0, 2).join(" / ")}</small>
                <strong>{project.title}</strong>
              </span>
              <span>↗</span>
            </Link>
          ))}
          <Link className="text-link" href="/projects/">
            Open the cabinet →
          </Link>
        </div>
        <div className="journal-teaser">
          <p className="eyebrow">III. THE COMMONPLACE BOOK</p>
          <span className="journal-symbol" aria-hidden="true">
            ❧
          </span>
          <h2>Field Notes</h2>
          <p>
            A place for observations, questions, and ideas at the edges of
            biology, medicine, and the history of science.
          </p>
          <Link className="text-link" href="/notes/">
            Turn to the notebook <span>→</span>
          </Link>
        </div>
      </section>
      <section className="wrap closing-link">
        <p>Curiosity seldom stays in one discipline.</p>
        <Link href="/interests/">
          Explore the cabinet of curiosities <span>↗</span>
        </Link>
      </section>
    </>
  );
}
