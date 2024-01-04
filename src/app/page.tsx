import About from "@/components/organisms/sections/about";
import Companies from "@/components/organisms/sections/companies";
import Contact from "@/components/organisms/sections/contact";
import Experience from "@/components/organisms/sections/experience";
import Hero from "@/components/organisms/sections/hero";
import Portfolio from "@/components/organisms/sections/portfolio";
import Testimonial from "@/components/organisms/sections/testimonial";

export default function Home() {
  return (
    <main className="space-y-10 md:space-y-20">
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Companies />
      <Testimonial />
      <Contact />
    </main>
  );
}
