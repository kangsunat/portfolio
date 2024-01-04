import HeroLeft from "../../atoms/hero/left";
import HeroRight from "../../mollecules/hero/right";

export default function Hero() {
  return (
    <section className="h-[50vh] md:h-[88vh] grid grid-cols-1 lg:grid-cols-2 md:p-8 p-4 container gap-8 lg:gap-0">
      <HeroLeft />
      <HeroRight />
    </section>
  );
}
