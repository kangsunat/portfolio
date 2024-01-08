import React from "react";
import HeroHeaderSwiper from "../mollecules/hero-header-swiper";
import { fakerID_ID as faker } from "@faker-js/faker";

export default function HeroHeader() {
  return (
    <section className="grid grid-cols-1 place-items-center lg:grid-cols-2 ">
      <div className="flex flex-col gap-3 p-8">
        <h2 className="text-2xl font-bold text-[#283618] lg:text-4xl">
          Experienced Web Developer Creating Stunning Websites
        </h2>
        <small className="text-[#606c38]">
          Welcome to my portfolio website. I specialize in designing and
          developing visually appealing and user-friendly websites.
        </small>
      </div>
      <HeroHeaderSwiper
        slide={[
          {
            image: faker.image.urlLoremFlickr({ category: "commerce" }),
            name: faker.commerce.productName(),
            description: faker.commerce.productAdjective(),
          },
          {
            image: faker.image.urlLoremFlickr({ category: "commerce" }),
            name: faker.commerce.productName(),
            description: faker.commerce.productAdjective(),
          },
          {
            image: faker.image.urlLoremFlickr({ category: "commerce" }),
            name: faker.commerce.productName(),
            description: faker.commerce.productAdjective(),
          },
          {
            image: faker.image.urlLoremFlickr({ category: "commerce" }),
            name: faker.commerce.productName(),
            description: faker.commerce.productAdjective(),
          },
        ]}
      />
    </section>
  );
}
