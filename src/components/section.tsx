import { Reveal } from "./reveal";

/** Every section opens with a shell prompt. The visible command is decorative; the label is what screen readers get. */
export function Section({
  id,
  command,
  label,
  meta,
  children,
}: {
  id: string;
  command: string;
  label: string;
  meta?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="section">
      <Reveal>
        <h2 id={`${id}-heading`} className="section-head">
          <span aria-hidden className="prompt">
            $
          </span>
          <span aria-hidden className="cmd">
            {command}
          </span>
          <span className="sr-only">{label}</span>
          {meta && (
            <span aria-hidden className="meta">
              {meta}
            </span>
          )}
        </h2>
      </Reveal>
      <div className="section-body">{children}</div>
    </section>
  );
}

export function Divider() {
  return <div aria-hidden className="hatch" />;
}
