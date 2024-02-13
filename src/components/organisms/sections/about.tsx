import React from "react";
import SectionTitle from "@/components/atoms/section-title";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="from-primary-200 via-secondary-200 to-accent-200 text-main-50 grid place-items-center gap-8 bg-gradient-to-br px-4 py-10 md:grid-cols-2 "
    >
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
        <Image
          alt="passfoto"
          src={"/pas-foto.jpg"}
          width={1000}
          height={1000}
          className="h-[400px] object-contain"
        />
      </div>
    </section>
  );
}
