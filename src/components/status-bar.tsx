"use client";

import { useSyncExternalStore } from "react";
import { GitBranch } from "lucide-react";
import { site } from "@/content/site";
import { useActiveSection } from "./active-section";

function subscribe(cb: () => void) {
  const id = setInterval(cb, 15_000);
  return () => clearInterval(id);
}
const snapshot = () =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: site.timeZone }).format(
    new Date(),
  );

/** A tmux-style status line: where you are on the page, and the local time. */
export function StatusBar() {
  const active = useActiveSection();
  const time = useSyncExternalStore(subscribe, snapshot, () => "");
  const path = active === "top" ? "~/portfolio" : `~/portfolio/${active}`;

  return (
    <div
      className="status-bar"
    >
      <div className="status-inner">
        <span className="branch">
          <GitBranch size={11} aria-hidden />
          main
        </span>
        <span className="status-path" aria-live="off">
          {path}
        </span>
        <span className="status-hint">
          press <kbd>t</kbd> for theme
        </span>
        <span className="status-time" suppressHydrationWarning>
          {time ? `${time} ${site.timeZone.split("/")[1]?.replace("_", " ")}` : "--:--"}
        </span>
      </div>
    </div>
  );
}
