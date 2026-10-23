import { about, education } from "@/content/site";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" command="cat about.md" label="About">
      <div className="about-grid">
        <div className="about-text lead">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <dl className="facts">
            {about.facts.map((f) => (
              <div key={f.key} className="fact">
                <dt>{f.key}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="edu">
        <h3 className="skill-group">education/</h3>
        <ol className="jobs">
          {education.map((e) => (
            <Reveal as="li" key={e.school} className="job">
              <p className="job-period">{e.period}</p>
              <div>
                <h3 className="text-title">
                  {e.degree}
                  <span className="muted"> @ </span>
                  {e.school}
                </h3>
                <p className="muted">{e.place}</p>
                <p className="edu-line">
                  <span className="edu-key">thesis</span> {e.thesis}
                </p>
                <p className="edu-line muted">
                  <span className="edu-key">coursework</span> {e.coursework}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
