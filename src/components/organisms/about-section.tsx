import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { fakerID_ID as faker } from "@faker-js/faker";

export default function AboutSection() {
  return (
    <section className="container grid grid-cols-1 place-items-center gap-4 px-8 py-10 lg:grid-cols-2">
      <div className="flex flex-col justify-between gap-8">
        <div className="space-y-4">
          <small className="font-medium text-[#bc6c25]">About</small>
          <p className=" pb-4 text-2xl font-semibold text-[#283618] lg:text-4xl">
            Transforming Ideas into Beautiful Websites
          </p>
          <small className="text-[#606c38]">
            Ahmad Nasirin is a professional web developer who specializes in
            creating visually stunning and user-friendly websites. With a keen
            eye for design and a passion for coding, Ahmad is able to transform
            ideas into beautiful websites that not only look great but also
            deliver exceptional user experiences.
          </small>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <picture>
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="aspect-square w-10 rounded-full"
                />
              </picture>
              <p className="text-sm font-semibold text-[#283618]">
                {faker.company.name()}
              </p>
            </div>
            <small className="line-clamp-3 text-[#606c38]">
              {faker.lorem.lines()}
            </small>
          </div>
          <div>
            <div className="mb-3 flex items-center gap-3">
              <picture>
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="aspect-square w-10 rounded-full"
                />
              </picture>
              <p className="text-sm font-semibold text-[#283618]">
                {faker.company.name()}
              </p>
            </div>
            <small className="line-clamp-3 text-[#606c38]">
              {faker.lorem.lines()}
            </small>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-[#bc6c25] p-2 px-4 text-sm text-[#bc6c25] transition-all duration-300 hover:bg-[#bc6c25] hover:text-[#fefae0]">
            Download CV
          </button>
          <button className="flex items-center gap-2 text-sm text-[#dda15e] transition-all duration-300 hover:text-[#bc6c25]">
            <p>Read more</p>
            <i className="text-lg">
              <MdKeyboardArrowRight />
            </i>
          </button>
        </div>
      </div>
      <div>
        <picture>
          <img
            src={faker.image.avatar()}
            alt="about image"
            className="aspect-square h-[250px] rounded-lg lg:h-[450px] "
          />
        </picture>
      </div>
    </section>
  );
}
