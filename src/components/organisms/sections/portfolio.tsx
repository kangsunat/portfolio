import SectionTitle from "@/components/atoms/section-title";

import { MdKeyboardArrowRight } from "react-icons/md";
import PortfolioCard from "@/components/atoms/portfolio/card";
import { fakerID_ID as faker } from "@faker-js/faker";

export default function Portfolio() {
  return (
    <section className="relative my-10">
      <div className="absolute inset-x-0 bottom-0 grid h-[30%] place-content-center bg-gradient-to-b  from-transparent via-primary to-primary">
        <button className="inline-flex  w-fit items-center rounded-full bg-white px-3 py-1 text-black md:px-3 md:py-2">
          <p className="text-sm md:text-base">See more</p>
          <i className="md:text-xl">
            <MdKeyboardArrowRight />
          </i>
        </button>
      </div>
      <div className="container space-y-10 p-8 ">
        <SectionTitle
          title="Portfolio"
          quote="Innovative project series showcasing skills and dedication in development."
          position="left"
        />

        <main className="grid h-[80vh] grid-cols-2 gap-4 overflow-hidden md:grid-cols-4">
          <PortfolioCard
            id={faker.person.firstName()}
            img={faker.image.urlLoremFlickr({ category: "card" })}
          />
          <PortfolioCard
            id={faker.person.firstName()}
            img={faker.image.urlLoremFlickr({ category: "card" })}
          />
          <PortfolioCard
            id={faker.person.firstName()}
            img={faker.image.urlLoremFlickr({ category: "card" })}
          />
          <PortfolioCard
            id={faker.person.firstName()}
            img={faker.image.urlLoremFlickr({ category: "card" })}
          />
          <PortfolioCard
            id={faker.person.firstName()}
            img={faker.image.urlLoremFlickr({ category: "card" })}
          />
          <PortfolioCard
            id={faker.person.firstName()}
            img={faker.image.urlLoremFlickr({ category: "card" })}
          />
          <PortfolioCard
            id={faker.person.firstName()}
            img={faker.image.urlLoremFlickr({ category: "card" })}
          />
          <PortfolioCard
            id={faker.person.firstName()}
            img={faker.image.urlLoremFlickr({ category: "card" })}
          />
          <PortfolioCard
            id={faker.person.firstName()}
            img={faker.image.urlLoremFlickr({ category: "card" })}
          />
          <PortfolioCard
            id={faker.person.firstName()}
            img={faker.image.urlLoremFlickr({ category: "card" })}
          />
          <PortfolioCard
            id={faker.person.firstName()}
            img={faker.image.urlLoremFlickr({ category: "card" })}
          />
          <PortfolioCard
            id={faker.person.firstName()}
            img={faker.image.urlLoremFlickr({ category: "card" })}
          />
        </main>
      </div>
    </section>
  );
}
