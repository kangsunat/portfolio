import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";
import { GoArrowRight } from "react-icons/go";
import TestimoniSwiper from "@/components/mollecules/about/testimoni-swiper";

export default function About() {
  return (
    <main className="space-y-10">
      {/* about */}
      <section className="container grid grid-cols-2 place-items-center px-8 py-20 xl:px-0 ">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-semibold">{faker.lorem.sentence()}</h2>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vero
            nisi nemo eius. Consequatur nesciunt est beatae ducimus, dolore quos
            velit itaque animi dignissimos eveniet ipsam. Perspiciatis placeat
            ex laborum.
          </small>
        </div>
        <div>
          <picture>
            <img
              src={faker.image.avatar()}
              alt=""
              className="aspect-square w-[300px] rounded-md"
            />
          </picture>
        </div>
      </section>

      {/* project success */}
      <section
        style={{
          backgroundImage: `url(${faker.image.urlLoremFlickr({
            category: "nature",
          })})`,
        }}
        className="container relative grid grid-cols-2 gap-8 bg-cover bg-fixed bg-no-repeat px-8 py-10 text-white"
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="z-10 flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">{faker.lorem.sentence()}</h2>
          <small>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            voluptates hic corporis fugit, dolorem provident eius aspernatur,
            quis debitis aliquam inventore tenetur in ratione praesentium
            officia. Sapiente ipsam perspiciatis velit.
          </small>
          <div className="flex items-center gap-3">
            <button className="rounded-md bg-black px-4 py-2">
              Download CV
            </button>
            <button className="flex items-center gap-2">
              <p>Contact</p>
              <i>
                <GoArrowRight />
              </i>
            </button>
          </div>
        </div>
        <div className="z-10 grid h-fit grid-cols-2 gap-8">
          <div className="border-l border-white p-3">
            <p className="text-2xl font-semibold">123</p>
            <p>Project Success</p>
          </div>
          <div className="border-l border-white p-3">
            <p className="text-2xl font-semibold">123</p>
            <p>Project Cancel</p>
          </div>
          <div className="col-span-2 border-l border-white p-3">
            <p className="text-2xl font-semibold">123</p>
            <p>Project All</p>
          </div>
        </div>
      </section>

      {/* testimoni */}
      <section className="container space-y-10 px-8 py-10 xl:px-0">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-semibold">{faker.lorem.words()}</h2>
          <small>{faker.lorem.sentences()}</small>
        </div>
        <TestimoniSwiper />
      </section>
    </main>
  );
}
