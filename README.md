# Terminal Portfolio

Minimal, terminal-flavoured portfolio. Next.js (App Router) + plain CSS + lucide-react.
Light theme by default, dark mode via the toggle (or press `t`).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

`next`, `react`, `react-dom` and `lucide-react` are set to `latest`.
Run `npm install` once and commit the lockfile so everyone gets the same versions.

## Add the real content

1. All copy lives in `src/content/site.ts` (name, bio, skills, education, jobs, projects, research, socials, email, time zone).
2. Drop `resume.pdf` and `avatar.jpg` into `/public`, then set `avatar: "/avatar.jpg"` in `site.ts`.
3. Change the accent in `src/app/globals.css` (`--accent`, light and dark blocks). Every colour is a token.
4. Section order: edit `nav` in `site.ts` and the order in `src/app/page.tsx`.

## Notes

- Fonts are self-hosted via Fontsource (JetBrains Mono + Instrument Sans), so no network is needed at build time.
- lucide-react v1 has no brand logos, so GitHub, LinkedIn and X are inline SVGs in `components/brand-icons.tsx`.
- The theme switch uses the View Transitions API (circular wipe) and falls back to an instant swap. All motion respects `prefers-reduced-motion`.
