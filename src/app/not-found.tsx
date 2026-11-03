import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="mb-2 text-2xl font-semibold text-ink">Page not found</h1>
      <p className="mb-6 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="inline-flex items-center rounded border border-line2 bg-elevated px-4 py-2 font-mono text-sm text-ink hover:bg-hover hover:border-muted"
      >
        Go to the home page
      </Link>
    </div>
  );
}
