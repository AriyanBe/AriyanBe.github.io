"use client";

import Link from "next/link";
import { useEffect, useRef, useSyncExternalStore, type KeyboardEvent } from "react";
import { getCategories, readArchiveSelection, selectReflections, type ArchiveSelection, type ReflectionPreview } from "@/lib/reflections";

const changeEvent = "reflections-selection";
function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(changeEvent, callback);
  };
}
const getSearch = () => window.location.search;
const getServerSearch = () => "";

export function ReflectionsArchive({ entries }: { entries: ReflectionPreview[] }) {
  const search = useSyncExternalStore(subscribe, getSearch, getServerSearch);
  const categories = getCategories(entries);
  const selection = readArchiveSelection(search, categories.map(category => category.value));
  const visible = selectReflections(entries, selection);
  const strip = useRef<HTMLDivElement>(null);
  const edge = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = strip.current;
    const frame = edge.current;
    if (!element || !frame) return;
    const updateEdges = () => {
      frame.dataset.start = String(element.scrollLeft > 2);
      frame.dataset.end = String(element.scrollLeft + element.clientWidth < element.scrollWidth - 2);
    };
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
      const distance = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? element.clientWidth : 1);
      const canScroll = distance > 0
        ? element.scrollLeft + element.clientWidth < element.scrollWidth - 1
        : element.scrollLeft > 0;
      if (!canScroll) return;
      event.preventDefault();
      element.scrollLeft += distance;
    };
    const observer = new ResizeObserver(updateEdges);
    observer.observe(element);
    element.addEventListener("scroll", updateEdges, { passive: true });
    element.addEventListener("wheel", wheel, { passive: false });
    updateEdges();
    return () => {
      observer.disconnect();
      element.removeEventListener("scroll", updateEdges);
      element.removeEventListener("wheel", wheel);
    };
  }, [entries]);

  function updateSelection(next: ArchiveSelection) {
    const url = new URL(window.location.href);
    if (next.category === null) url.searchParams.delete("category");
    else url.searchParams.set("category", next.category);
    if (next.sort === "newest") url.searchParams.delete("sort");
    else url.searchParams.set("sort", next.sort);
    if (url.search === window.location.search) return;
    window.history.pushState(null, "", url.pathname + url.search + url.hash);
    window.dispatchEvent(new Event(changeEvent));
  }

  function moveFocus(event: KeyboardEvent<HTMLDivElement>) {
    const buttons = Array.from(event.currentTarget.querySelectorAll("button"));
    const index = buttons.indexOf(event.target as HTMLButtonElement);
    if (index < 0) return;
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % buttons.length; break;
      case "ArrowLeft": next = (index - 1 + buttons.length) % buttons.length; break;
      case "Home": next = 0; break;
      case "End": next = buttons.length - 1; break;
      default: return;
    }
    event.preventDefault();
    buttons[next].focus();
    buttons[next].scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  return (
    <>
      <div className="reflection-controls">
        <div className="category-window" ref={edge}>
          <div className="reflection-categories" role="group" aria-label="Filter reflections by category" ref={strip} onKeyDown={moveFocus}>
            <button type="button" aria-pressed={selection.category === null} aria-controls="reflection-results" onClick={() => updateSelection({ ...selection, category: null })}>
              All <span className="category-count">({entries.length})</span>
            </button>
            {categories.map(category => (
              <button type="button" key={category.value} aria-pressed={selection.category === category.value} aria-controls="reflection-results" onClick={() => updateSelection({ ...selection, category: category.value })}>
                {category.label} <span className="category-count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
        <label className="reflection-sort">
          <span>Order</span>
          <select value={selection.sort} onChange={event => updateSelection({ ...selection, sort: event.target.value === "oldest" ? "oldest" : "newest" })} aria-controls="reflection-results">
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </label>
      </div>
      <p className="reflection-status" role="status" aria-live="polite" aria-atomic="true">
        {visible.length} {visible.length === 1 ? "reflection" : "reflections"}{selection.category ? ` in ${selection.category}` : ""}, {selection.sort === "oldest" ? "oldest" : "newest"} first.
      </p>
      <div className="notes-list" id="reflection-results">
        {visible.length ? visible.map(entry => (
          <article className="note-entry" key={entry.slug}>
            <div className="note-date">
              <span>{entry.category}</span>
              <time dateTime={entry.date}>{entry.displayDate}</time>
            </div>
            <div>
              <h2><Link href={`/reflections/${entry.slug}/`}>{entry.title}</Link></h2>
              <p className="reflection-author">By {entry.author}</p>
              {entry.description && <p>{entry.description}</p>}
              <Link className="text-link" href={`/reflections/${entry.slug}/`}>Read reflection <span>→</span></Link>
            </div>
            {entry.readingTime !== null && <span className="reading-time">{entry.readingTime} min read</span>}
          </article>
        )) : <p className="reflection-empty">{selection.category ? "No reflections have been published in this category." : "No reflections have been published yet."}</p>}
      </div>
    </>
  );
}
