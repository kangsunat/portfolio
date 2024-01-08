import React from "react";
import HeroHeaderSwiper from "../mollecules/hero-header-swiper";
import { fakerID_ID as faker } from "@faker-js/faker";

export default function HeroHeader() {
  return (
    <section className="grid grid-cols-2 place-items-center ">
      <div className="flex flex-col gap-3 p-8">
        <h2 className="text-xl font-bold">
          Experienced Web Developer Creating Stunning Websites
        </h2>
        <small>
          Welcome to my portfolio website. I specialize in designing and
          developing visually appealing and user-friendly websites.
        </small>
        <div className="flex items-center gap-3">
          <button className="bg-neutral-950 px-4 py-1 text-white">btn 1</button>
          <button className="border border-neutral-500 px-4 py-1">btn 2</button>
        </div>
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
