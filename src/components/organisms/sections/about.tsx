import React from "react";
import SectionTitle from "@/components/atoms/section-title";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="text-main-950 dark:text-main-50 grid grid-cols-1 place-items-center gap-8 px-4 lg:grid-cols-2 "
    >
      <div className="place-self-center">
        <Image
          alt="passfoto"
          src={"/about-2.jpg"}
          width={1000}
          height={1000}
          className="aspect-video h-[180px] rounded-lg md:h-[400px]"
        />
      </div>
      <div className="space-y-10">
        <SectionTitle
          color="rose"
          title="About"
          quote="Creative, passionate, and committed to personal and professional growth"
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
    </section>
  );
}
