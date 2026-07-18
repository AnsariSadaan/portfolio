import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Interactions } from "@/components/sections/Interactions";
import { ScrollAnimationsDemo } from "@/components/animations/ScrollAnimations";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Testimonials /> */}
      <Interactions />
      <ScrollAnimationsDemo />
      {/* <Blog /> */}
      <Contact />
    </main>
  );
}
