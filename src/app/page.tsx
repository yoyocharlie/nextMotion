import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { Footer } from "~/components/footer";
import { Hero } from "~/components/hero";
import { Navbar } from "~/components/navbar";
import { Projects } from "~/components/projects";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Projects />
      {/* <About /> */}
      <Contact />
      <Footer />
    </main>
  );
}
