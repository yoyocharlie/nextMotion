import { About } from "~/components/about";
import { Hero } from "~/components/hero";
import { Projects } from "~/components/projects";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
