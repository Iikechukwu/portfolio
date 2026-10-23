"use client";

import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { useActiveSection } from "./active-section";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      data-scrolled={scrolled}
      className="site-header"
    >
      <div className="header-inner">
        <a
          href="#top"
          className="press brand"
          onClick={() => setOpen(false)}
        >
          <span>~/</span>
          {site.handle}
        </a>

        <nav aria-label="Primary" className="nav-desktop">
          {nav.map((item) => {
            const current = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={current ? "location" : undefined}
                className="nav-link"
              >
                {item.label}
                <span
                  aria-hidden
                  className="nav-link__bar"
                />
              </a>
            );
          })}
        </nav>

        <a
          href={site.resume}
          className="press resume-btn"
        >
          <FileText size={14} aria-hidden />
          resume.pdf
        </a>

        <ThemeToggle />

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="press icon-btn menu-btn"
        >
          {open ? <X size={16} aria-hidden /> : <Menu size={16} aria-hidden />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="menu-in nav-mobile"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              aria-current={active === item.id ? "location" : undefined}
            >
              <span aria-hidden className={cn("chev", active === item.id && "on")}>
                &gt;
              </span>
              {item.label}
            </a>
          ))}
          <a
            href={site.resume}
            className="mobile-resume"
          >
            <FileText size={14} aria-hidden />
            resume.pdf
          </a>
        </nav>
      )}
    </header>
  );
}
