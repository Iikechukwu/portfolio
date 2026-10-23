import type { Metadata, Viewport } from "next";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import { site } from "@/content/site";
import { themeInitScript } from "@/lib/theme";

export const metadata: Metadata = {
  title: { default: `${site.name}, ${site.role}`, template: `%s · ${site.name}` },
  description: site.intro,
};

export const viewport: Viewport = {
  themeColor: "#f1f3f4",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
