import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import ExperienceCard from "../../atoms/experience/card";
import SectionTitle from "../../atoms/section-title";

export default function Experience() {
  return (
    <section className="container space-y-10 px-4 py-10 md:px-0">
      <SectionTitle
        title="Work Experience"
        quote="Success is born of dedication, discipline, and passion. Work
          Well is an investment for a glorious future. Every
          Effort brings lessons and growth. Keep creating, results will
          follow."
      />

      <div className="grid divide-y-2 divide-slate-500 md:grid-cols-2 md:divide-x-2 md:divide-y-0">
        <ExperienceCard
          date={{ start: "Maret 2020", end: "November 2021" }}
          position="Freelance Website Developer"
          description="Experienced freelance web developer with expertise in website development using PHP, Laravel, and MySQL. Has successfully provided creative and functional web solutions to a wide range of clients. With a portfolio that includes projects from different industries, has the ability to understand and meet client needs with precision. Delivers a solid development experience with a focus on high performance and security. Can be relied on to deliver the best results in complex and varied web projects."
        />
        <ExperienceCard
          date={{ start: "Maret 2020" }}
          position="Frontend Website Developer"
          company={{
            name: "Golektruk",
            linkedin: "https://www.linkedin.com/in/ahmad-nasirin-b8720711a/",
            website: "https://golektruk.com/",
          }}
          description="Talented Frontend Web Developer with expertise in development using the latest technologies such as Next.js, Tailwind CSS, React Query, and Formik. Experienced in executing Figma designs into dynamic and responsive user interfaces. Ensure optimal performance, security and bug-free quality in every project. With a deep understanding of WordPress integration, able to create a seamless user experience. With a focus on cutting accurate designs, offering creative frontend solutions, and always meeting project deadlines."
        />
      </div>
      <div className="flex items-center justify-center">
        <Link
          href={"https://www.linkedin.com/in/ahmad-nasirin-b8720711a/"}
          target="_blank"
          className="flex items-center gap-2 rounded-full border bg-white px-2 py-1 shadow transition-all duration-300 hover:shadow-white"
        >
          <i className="text-blue-500 md:text-2xl">
            <FaLinkedin />
          </i>
          <p className="text-sm text-black md:text-base">More details...</p>
        </Link>
      </div>
    </section>
  );
}
