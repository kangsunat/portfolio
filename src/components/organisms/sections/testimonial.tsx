import SectionTitle from "@/components/atoms/section-title";
import TestimoniSwiper from "@/components/mollecules/testimoni/testimoni-swiper";
import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";
import { tCardTestimoni } from "@/types/testimoni";

const testimoniFake = () => {
  const data: tCardTestimoni[] = [];
  for (let index = 0; index < 10; index++) {
    data.push({
      img: faker.image.avatar(),
      name: faker.person.fullName(),
      testimoni: faker.lorem.paragraphs(),
    });
  }

  return data;
};

export default function Testimonial() {
  return (
    <section className="container space-y-8 py-5 md:py-10">
      <SectionTitle title="Happy Client" />
      <TestimoniSwiper card={testimoniFake()} />
    </section>
  );
}
