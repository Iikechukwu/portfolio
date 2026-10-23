import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { site } from "@/content/site";
import { Typed } from "./typed";

function Avatar() {
  return (
    <div className="rise avatar" style={{ "--d": "900ms" } as React.CSSProperties}>
      <div className="avatar-frame">
        {site.avatar ? (
          <Image src={site.avatar} alt={`Portrait of ${site.name}`} width={144} height={144} priority  />
        ) : (
          <span aria-hidden className="avatar-initials">
            {site.initials}
          </span>
        )}
      </div>
      <span
        aria-hidden
        className="avatar-glow"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="hero">
      <div className="window">
        {/* window chrome */}
        <div className="window-bar">
          <div aria-hidden className="dots">
            <span />
            <span />
            <span />
          </div>
          <span className="window-title">~/portfolio</span>
        </div>

        <div className="hero-body">
          <div className="hero-copy">
            <p className="whoami">
              <span aria-hidden className="prompt">
                $
              </span>{" "}
              <Typed text="whoami" delay={300} />
            </p>

            <h1
              className="rise hero-name text-display"
              style={{ "--d": "700ms" } as React.CSSProperties}
            >
              {site.name}
            </h1>

            <p className="rise hero-role" style={{ "--d": "850ms" } as React.CSSProperties}>
              {site.role}
              <span aria-hidden className="sep"> / </span>
              <span className="tag">{site.tagline}</span>
            </p>

            <p className="rise hero-intro lead" style={{ "--d": "1000ms" } as React.CSSProperties}>
              {site.intro}
            </p>

            <p className="rise availability" style={{ "--d": "1150ms" } as React.CSSProperties}>
              <span aria-hidden className="pulse">
                <span className="ring" />
                <span className="dot" />
              </span>
              {site.availability}
            </p>

            <div className="rise hero-actions" style={{ "--d": "1300ms" } as React.CSSProperties}>
              <a
                href="#projects"
                className="press btn btn-solid"
              >
                View projects
                <ArrowDown size={14} aria-hidden />
              </a>
              <a
                href={site.resume}
                className="press btn btn-outline"
              >
                <Download size={14} aria-hidden />
                Download resume
              </a>
            </div>

            <p aria-hidden className="rise hero-caret" style={{ "--d": "1500ms" } as React.CSSProperties}>
              <span className="prompt">$</span> <span className="caret" />
            </p>
          </div>

          <Avatar />
        </div>
      </div>
    </section>
  );
}
