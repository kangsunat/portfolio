import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { fakerID_ID as faker } from "@faker-js/faker";

export default function AboutSection() {
  return (
    <section className="container grid grid-cols-2 place-items-center px-8 py-10">
      <div className="flex flex-col justify-between gap-8">
        <div className="space-y-4">
          <small className="font-medium">About</small>
          <p className=" pb-4 text-4xl font-semibold">
            Transforming Ideas into Beautiful Websites
          </p>
          <small>
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
              <p className="text-sm font-semibold">{faker.company.name()}</p>
            </div>
            <small>{faker.lorem.lines()}</small>
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
              <p className="text-sm font-semibold">{faker.company.name()}</p>
            </div>
            <small>{faker.lorem.paragraphs({ max: 1, min: 1 })}</small>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="border border-neutral-500 p-2 px-4 text-sm">
            Download CV
          </button>
          <button className="flex items-center gap-2 text-sm">
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
            src="https://picsum.photos/200"
            alt="about image"
            className="aspect-square h-[450px] rounded-lg "
          />
        </picture>
      </div>
    </section>
  );
}
