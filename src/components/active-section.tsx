"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ActiveSectionContext = createContext("top");

export const useActiveSection = () => useContext(ActiveSectionContext);

/** Tracks which section sits under the reading line; feeds the nav and the status bar. */
export function ActiveSectionProvider({
  ids,
  children,
}: {
  ids: readonly string[];
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-42% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));

    // the last section may never reach the reading line on tall screens
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) setActive(ids[ids.length - 1]);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);

  return <ActiveSectionContext.Provider value={active}>{children}</ActiveSectionContext.Provider>;
}
