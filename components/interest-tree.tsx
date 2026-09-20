"use client";
import { useState } from "react";
import Link from "next/link";
import { branches } from "@/data/interests";
export function InterestTree() {
  const [active, setActive] = useState(0);
  return (
    <section className="tree-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">A SMALL EXERCISE IN CONNECTED THINKING</p>
          <h2>Common roots. Many directions.</h2>
        </div>
      </div>
      <p className="tree-description">
        Follow a branch to explore a connection. This is a map of interests, not
        an evolutionary hypothesis.
      </p>
      <div className="tree-layout">
        <div className="tree-controls">
          <svg
            viewBox="0 0 240 300"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 150H55M55 60V240M55 60H110M110 30V90M110 30H235M110 90H235M55 240H90M90 150V270M90 150H235M90 270H145M145 210V270M145 210H235M145 270H235" />
            </g>
            <g fill="currentColor">
              <circle cx="55" cy="150" r="4" />
              <circle cx="110" cy="60" r="3" />
              <circle cx="90" cy="240" r="3" />
            </g>
          </svg>
          <div className="branch-buttons">
            {branches.map((b, i) => (
              <button
                key={b.name}
                className={active === i ? "active" : ""}
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-pressed={active === i}
              >
                {b.name}
                <span>↗</span>
              </button>
            ))}
          </div>
        </div>
        <div className="branch-note" aria-live="polite" aria-atomic="true">
          <span className="eyebrow">BRANCH 0{active + 1}</span>
          <h3>{branches[active].name}</h3>
          <p>{branches[active].description}</p>
          <Link className="text-link" href={branches[active].href}>
            {branches[active].link} →
          </Link>
        </div>
      </div>
    </section>
  );
}
