import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/page-intro";
import { profile } from "@/data/profile";
export const metadata = pageMetadata(
  "Correspondence",
  `Contact information and GitHub profile for ${profile.name}.`,
  "/contact/",
);
export default function Contact() {
  return (
    <div className="wrap page-shell">
      <PageIntro
        number="VIII"
        label="CORRESPONDENCE"
        title="A conversation begins here."
        description="Research questions, shared interests, and opportunities to think together."
      />
      <div className="contact-paper">
        <span className="eyebrow">TO {profile.name.toUpperCase()}</span>
        <h2>Let’s compare notes.</h2>
        <p>
          I’m interested in conversations across biology, computation,
          neuroscience, and medicine.
        </p>
        {profile.email && (
          <div className="contact-method">
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email} ↗</a>
          </div>
        )}
        {profile.github && (
          <div className="contact-method">
            <span>GitHub</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              {profile.github} ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
