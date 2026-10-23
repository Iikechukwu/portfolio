/** Tiny class joiner so we don't need clsx for a portfolio. */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
