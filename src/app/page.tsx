import AboutSection from "@/components/organisms/about-section";
import HeroHeader from "@/components/organisms/hero-header";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <main className="container">
      <HeroHeader />
      <AboutSection />
    </main>
  );
}
