export type Theme = "light" | "dark";
export const THEME_KEY = "theme";

/** Runs before first paint (inlined in <head>) so there is no flash. Light is the default. */
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_KEY}");document.documentElement.dataset.theme=t==="dark"?"dark":"light"}catch(e){document.documentElement.dataset.theme="light"}`;
