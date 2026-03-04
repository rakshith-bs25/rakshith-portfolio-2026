import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { OtherProjects } from "@/components/OtherProjects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 min-h-screen flex flex-col w-full">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <OtherProjects />
      <Contact />
    </main>
  );
}
