import { research } from "@/content/site";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Research() {
  const p = research.project;
  return (
    <Section id="research" command="cat research.md" label="Research" meta="1 active project">
      <Reveal>
        <h3 className="skill-group research-label">interests/</h3>
        <ul className="chips">
          {research.interests.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={80} className="research-project">
        <article className="project-inner">
          <div className="project-meta">
            <span className="year">{p.year}</span>
            <span className="status status-wip">in progress</span>
          </div>
          <div>
            <h3 className="project-title text-title">{p.title}</h3>
            <blockquote className="research-question">{p.question}</blockquote>
            <ul className="points">
              {p.points.map((pt) => (
                <li key={pt}>
                  <span aria-hidden className="dash">
                    –
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="project-foot">
              <ul className="stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
