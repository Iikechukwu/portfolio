import { skills } from "@/content/site";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" command="ls skills/" label="Skills" meta={`${skills.length} groups`}>
      <ul className="rows">
        {skills.map((g, i) => (
          <Reveal as="li" key={g.group} delay={i * 70} className="skill-row">
            <h3 className="skill-group">{g.group}/</h3>
            <ul className="chips">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="chip"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
