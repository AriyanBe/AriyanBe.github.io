import Link from "next/link";
import { copyright } from "@/data/copyright";
import { profile } from "@/data/profile";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="footer-name" href="/">
            {profile.name}
          </Link>
          <p>Biology · Research · Medicine · Computation</p>
        </div>
        <div className="footer-links">
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          )}
          {profile.email ? (
            <a href={`mailto:${profile.email}`}>Email ↗</a>
          ) : (
            <Link href="/contact/">Correspondence ↗</Link>
          )}
        </div>
      </div>
      <div className="colophon">
        <span>{copyright.notice}</span>
        <Link href="/copyright/">Copyright &amp; Use</Link>
      </div>
    </footer>
  );
}
