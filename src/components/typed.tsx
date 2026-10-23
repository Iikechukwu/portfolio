/** CSS-driven typewriter. Needs a monospace face; width is measured in `ch`. */
export function Typed({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) {
  return (
    <span
      className={`typed ${className ?? ""}`}
      style={{ "--n": text.length, "--d": `${delay}ms` } as React.CSSProperties}
    >
      {text}
    </span>
  );
}
