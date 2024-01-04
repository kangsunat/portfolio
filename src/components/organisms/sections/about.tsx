import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";
import SectionTitle from "@/components/atoms/section-title";

export default function About() {
  return (
    <section className="grid place-items-center gap-8 bg-black px-4 py-10 md:grid-cols-2">
      <div className="space-y-10 ">
        <SectionTitle
          color="rose"
          title="About"
          quote="Creative, passionate, and committed to personal and professional growth"
          position="right"
        />

        <p className="text-center text-sm md:text-base">
          Hi! I&apos;m Nasirin, a web developer with over two years experience.
          I have expertise in frontend development and The backend uses
          JavaScript, Next.js, and Express.js. Flexible to work as a fullstack
          or focus on the frontend or backend, I also have experience in
          designing application architectures, including REST APIs,
          microservices, and monolytic. Thanks!
        </p>
      </div>
      <div className="place-self-center">
        <picture>
          <img
            src={faker.internet.avatar()}
            alt=""
            className="aspect-square h-[30vh] w-auto rounded-lg md:h-[50vh] md:rounded-xl"
          />
        </picture>
      </div>
    </section>
  );
}
