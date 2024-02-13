import HeroLeft from "../../atoms/hero/left";
import HeroRight from "../../mollecules/hero/right";

export default function Hero() {
  return (
    <section className="container grid grid-cols-1 gap-8 p-4 md:p-8 lg:grid-cols-2 lg:gap-0">
      <HeroLeft />
      <HeroRight />
    </section>
  );
}
