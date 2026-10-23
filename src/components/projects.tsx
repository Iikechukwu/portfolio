import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/content/site";
import { cn } from "@/lib/cn";
import { GithubIcon } from "./brand-icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

const statusStyle: Record<Project["status"], string> = {
  live: "status-live",
  wip: "status-wip",
  done: "status-done",
  archived: "status-archived",
};

function ProjectRow({ p, i }: { p: Project; i: number }) {
  return (
    <Reveal as="li" delay={i * 60} className="project">
      <article className="project-inner">
        <div className="project-meta">
          <span className="year">{p.year}</span>
          <span className={cn("status", statusStyle[p.status])}>
            {p.status}
          </span>
        </div>

        <div>
          <h3 className="project-title text-title">
            <span
              aria-hidden
              className="project-arrow"
            >
              &gt;
            </span>
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                {p.name}
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="arrow-up-right"
                />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              p.name
            )}
          </h3>

          <p className="project-desc">{p.description}</p>

          <div className="project-foot">
            <ul className="stack">
              {p.stack.map((s) => (
                <li key={s}>
                  {s}
                </li>
              ))}
            </ul>
            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="repo-link"
              >
                <GithubIcon size={14} />
                source
                <span className="sr-only"> for {p.name} (opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projects" command="ls -la projects/" label="Projects" meta={`${projects.length} items`}>
      <ul className="rows">
        {projects.map((p, i) => (
          <ProjectRow key={p.name} p={p} i={i} />
        ))}
      </ul>
    </Section>
  );
}
