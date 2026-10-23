import { experience } from "@/content/site";
import { Reveal } from "./reveal";
import { Section } from "./section";

/** Chronological on purpose: it reads like `git log`, newest first. */
export function Experience() {
  return (
    <Section id="experience" command="git log --career" label="Experience">
      <ol className="jobs">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.period + job.company} delay={i * 80} className="job">
            <p className="job-period">{job.period}</p>
            <div>
              <h3 className="text-title">
                {job.role}
                <span className="muted"> @ </span>
                {job.href ? (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noreferrer"
                    className="job-link"
                  >
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <ul className="points">
                {job.points.map((p) => (
                  <li key={p}>
                    <span aria-hidden className="dash">
                      –
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
