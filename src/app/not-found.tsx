import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="hint">
        <span className="prompt">$</span> cd /this-page
      </p>
      <h1 className="text-display">404</h1>
      <p>zsh: no such file or directory. That page doesn&rsquo;t exist or has moved.</p>
      <Link
        href="/"
        className="press btn btn-solid"
      >
        cd ~
      </Link>
    </main>
  );
}
