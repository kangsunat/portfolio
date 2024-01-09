import React from "react";
import TestimoniSwiper from "../mollecules/testimoni-swiper";
import { fakerID_ID as faker } from "@faker-js/faker";

export default function TestimoniSection() {
  return (
    <section className="space-y-10 px-8 py-10">
      {/* title */}
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-army-1 text-2xl font-semibold lg:text-4xl">
          Client Reviews
        </p>
        <small className="text-army-2">
          Hear what our clients have to say about me
        </small>
      </div>
      <TestimoniSwiper
        testimonies={[
          {
            avatar: faker.image.avatar(),
            jobPosition: faker.person.jobTitle(),
            logo: faker.image.urlLoremFlickr({ category: "company" }),
            message: faker.lorem.paragraph(),
            name: faker.person.fullName(),
          },
          {
            avatar: faker.image.avatar(),
            jobPosition: faker.person.jobTitle(),
            logo: faker.image.urlLoremFlickr({ category: "company" }),
            message: faker.lorem.paragraph(),
            name: faker.person.fullName(),
          },
          {
            avatar: faker.image.avatar(),
            jobPosition: faker.person.jobTitle(),
            logo: faker.image.urlLoremFlickr({ category: "company" }),
            message: faker.lorem.paragraph(),
            name: faker.person.fullName(),
          },
          {
            avatar: faker.image.avatar(),
            jobPosition: faker.person.jobTitle(),
            logo: faker.image.urlLoremFlickr({ category: "company" }),
            message: faker.lorem.paragraph(),
            name: faker.person.fullName(),
          },
          {
            avatar: faker.image.avatar(),
            jobPosition: faker.person.jobTitle(),
            logo: faker.image.urlLoremFlickr({ category: "company" }),
            message: faker.lorem.paragraph(),
            name: faker.person.fullName(),
          },
        ]}
      />
    </section>
  );
}
