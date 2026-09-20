"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, profile } from "@/data/profile";
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="monogram" href="/" aria-label={`${profile.name} home`}>
          {profile.initials}
          <span>✳</span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="main-nav"
          className={open ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          {navigation.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={
                (href === "/" ? pathname === "/" : pathname.startsWith(href))
                  ? "page"
                  : undefined
              }
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
