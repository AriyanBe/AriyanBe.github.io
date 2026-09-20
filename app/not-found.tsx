import Link from "next/link";
export default function NotFound() {
  return (
    <div className="wrap page-shell">
      <div className="page-intro">
        <p className="eyebrow">PAGE 404 · AN UNCATALOGUED SPECIMEN</p>
        <h1>
          This page is
          <br />
          not in the collection.
        </h1>
        <p className="page-description">
          The address may have changed, or this entry has yet to be written.
        </p>
        <Link className="button" href="/">
          Return to the study →
        </Link>
      </div>
    </div>
  );
}
