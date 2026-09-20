import type { ResearchEntry } from "@/data/research";

/** Decorative sequence examples, not research data or inferred relationships. */
export function ResearchIllustration({
  kind,
}: {
  kind: ResearchEntry["icon"];
}) {
  return (
    <svg
      className="research-illustration"
      viewBox="0 0 180 76"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      focusable="false"
    >
      {kind === "phylogeny" ? (
        <>
          <path d="M6 38h19M25 17v42M25 17h28M53 9v17M53 9h35M53 26h35M25 59h18M43 49v19M43 49h45M43 68h45" />
          <circle cx="25" cy="38" r="2" />
          <circle cx="53" cy="17" r="2" />
          <g
            fill="currentColor"
            stroke="none"
            fontFamily="monospace"
            fontSize="10"
          >
            <text x="98" y="13">
              ATG · GCT
            </text>
            <text x="98" y="30">
              ATG · GCC
            </text>
            <text x="98" y="53">
              ATG · GCA
            </text>
            <text x="98" y="72">
              ATG · GCG
            </text>
          </g>
          <path d="M128 3v70" strokeDasharray="2 4" opacity=".45" />
        </>
      ) : kind === "codons" ? (
        <>
          <path
            d="M9 14h158M9 59h158M20 21v30M30 25v22M40 21v30M62 21v30M72 25v22M82 21v30M104 21v30M114 25v22M124 21v30M145 21v30M155 25v22"
            opacity=".5"
          />
          <g fill="var(--surface)" stroke="currentColor">
            <rect x="12" y="27" width="39" height="20" />
            <rect x="55" y="27" width="39" height="20" />
            <rect x="98" y="27" width="39" height="20" />
          </g>
          <g
            fill="currentColor"
            stroke="none"
            fontFamily="monospace"
            fontSize="11"
          >
            <text x="21" y="41">
              GCT
            </text>
            <text x="64" y="41">
              GCC
            </text>
            <text x="107" y="41">
              GCA
            </text>
          </g>
          <path d="M31 50v17h87V50M74 67v7" />
        </>
      ) : (
        <>
          <ellipse cx="27" cy="33" rx="21" ry="25" />
          <ellipse cx="27" cy="33" rx="8" ry="10" />
          <path d="M14 22q6-8 12-8M37 40q4 8-7 11M56 33h20m-5-4 5 4-5 4" />
          <path d="M91 10q-8 6 0 12t0 12t0 12t0 12M101 10q-8 6 0 12t0 12t0 12t0 12M111 10q-8 6 0 12t0 12t0 12t0 12" />
          <path d="M126 60h47M130 60V43m10 17V27m10 33V36m10 24V17m10 43V46" />
          <circle cx="10" cy="55" r="2" />
          <circle cx="45" cy="12" r="2" />
        </>
      )}
    </svg>
  );
}
