import Link from "next/link";

// HTML refresh works on GitHub Pages without a server or JavaScript.
export function ReflectionRedirect({ href }: { href: string }) {
  return (
    <div className="wrap page-shell">
      <meta httpEquiv="refresh" content={`0;url=${href}`} />
      <h1>Reflections</h1>
      <p>The commonplace book has moved.</p>
      <Link className="text-link" href={href}>Continue to Reflections →</Link>
    </div>
  );
}
