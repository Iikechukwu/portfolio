import { About } from "@/components/about";
import { ActiveSectionProvider } from "@/components/active-section";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts";
import { Projects } from "@/components/projects";
import { Research } from "@/components/research";
import { Divider } from "@/components/section";
import { Skills } from "@/components/skills";
import { StatusBar } from "@/components/status-bar";
import { nav } from "@/content/site";

const ids = ["top", ...nav.map((n) => n.id)];

export default function Home() {
  return (
    <ActiveSectionProvider ids={ids}>
      <Header />
      <KeyboardShortcuts />
      <main id="main" className="frame">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Research />
        <Divider />
        <Contact />
        <Divider />
        <Footer />
      </main>
      <div aria-hidden className="spacer" />
      <StatusBar />
    </ActiveSectionProvider>
  );
}
