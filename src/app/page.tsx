import AboutSection from "@/components/organisms/about-section";
import ExperienceSection from "@/components/organisms/experience-section";
import HeroHeader from "@/components/organisms/hero-header";
import ProjectSection from "@/components/organisms/project-section";

export default function Home() {
  return (
    <main className="container">
      <HeroHeader />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
}
