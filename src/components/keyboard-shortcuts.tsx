"use client";

import { useEffect } from "react";
import { setTheme } from "./theme-toggle";

/** `t` flips the theme, like a shell alias. Ignored while typing or with modifiers. */
export function KeyboardShortcuts() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.key.toLowerCase() !== "t") return;
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      const dark = document.documentElement.dataset.theme === "dark";
      setTheme(dark ? "light" : "dark", { x: innerWidth - 40, y: 28 });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return null;
}
