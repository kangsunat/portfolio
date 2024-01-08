import AboutSection from "@/components/organisms/about-section";
import BlogSection from "@/components/organisms/blog-section";
import ExperienceSection from "@/components/organisms/experience-section";
import HeroHeader from "@/components/organisms/hero-header";
import ProjectSection from "@/components/organisms/project-section";
import TestimoniSection from "@/components/organisms/testimoni-section";

export default function Home() {
  return (
    <main className="container">
      <HeroHeader />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <BlogSection />
      <TestimoniSection />
    </main>
  );
}
