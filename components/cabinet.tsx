"use client";
import { useState } from "react";
import Link from "next/link";
import { interests } from "@/data/interests";
export function Cabinet() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="cabinet-grid">
      {interests.map((item, i) => (
        <div
          className={`specimen-card ${selected === i ? "selected" : ""}`}
          key={item.title}
        >
          <button
            aria-expanded={selected === i}
            aria-controls={`interest-${i}`}
            onClick={() => setSelected(selected === i ? null : i)}
          >
            <span className="specimen-number">SPECIMEN {item.symbol}</span>
            <span className="specimen-title">{item.title}</span>
            <span className="specimen-action">
              {selected === i ? "Close note −" : "Examine +"}{" "}
            </span>
          </button>
          <div
            id={`interest-${i}`}
            hidden={selected !== i}
            className="specimen-detail"
          >
            <p>{item.description}</p>
            <Link className="text-link" href={item.href}>
              {item.link} →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
