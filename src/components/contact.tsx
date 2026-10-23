import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { CopyEmail } from "./copy-email";
import { Reveal } from "./reveal";
import { Section } from "./section";

const socials = [
  { label: "GitHub", href: site.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedinIcon },
];

export function Contact() {
  return (
    <Section id="contact" command={`mail --to ${site.handle}`} label="Contact">
      <Reveal>
        <p className="contact-title text-display">Let&rsquo;s work together.</p>
        <p className="contact-copy lead">
          I&rsquo;m open to freelance, contract, and full-time ML engineer and data scientist roles, and to research collaborations in continual learning. Email is the fastest way in.
        </p>
      </Reveal>

      <Reveal delay={100} className="contact-actions">
        <a
          href={`mailto:${site.email}`}
          className="press btn btn-solid"
        >
          <Mail size={14} aria-hidden />
          {site.email}
        </a>
        <CopyEmail email={site.email} />
        <ul className="socials">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                title={label}
                className="press btn-icon"
              >
                <Icon size={16} />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
