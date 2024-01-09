import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";
import { GoArrowRight } from "react-icons/go";
import TestimoniSwiper from "@/components/mollecules/about/testimoni-swiper";

export default function About() {
  return (
    <main className="space-y-10">
      {/* about */}
      <section className="container grid grid-cols-2 place-items-center px-8 py-20 ">
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
      <section className="container space-y-10 px-8 py-10 ">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-semibold">Customer testimonials</h2>
          <small>
            See what our clients have to say about Ahmad&lsquo;s work.
          </small>
        </div>
        <TestimoniSwiper />
      </section>

      {/* skills programming */}
      <section className="container grid grid-cols-2 gap-4 px-8 py-10 ">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-semibold">Skills</h2>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            expedita hic, mollitia ratione nam eveniet beatae impedit animi
            quibusdam quaerat magni neque consequatur. Illo, id optio cum
            doloremque quis porro!
          </small>
          <div className="flex items-center gap-3">
            <button>Download Cv</button>
            <button>Contact</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-white">
          <div className="bg-army-2 w-full rounded-md p-2 text-center">
            Skills
          </div>
          <div className="bg-army-2 w-full rounded-md p-2 text-center">
            Skills
          </div>
          <div className="bg-army-2 w-full rounded-md p-2 text-center">
            Skills
          </div>
          <div className="bg-army-2 w-full rounded-md p-2 text-center">
            Skills
          </div>
          <div className="bg-army-2 w-full rounded-md p-2 text-center">
            Skills
          </div>
        </div>
      </section>

      {/* companies or organisation client */}
      <section className="container flex items-center gap-3 px-8 ">
        <p className="w-[30%] shrink-0  font-semibold">
          Used by the world&apos;s most average companies
        </p>
        <div className="flex flex-1 items-center gap-3 overflow-scroll">
          <div className="bg-army-2 p-2 text-white"> company</div>
          <div className="bg-army-2 p-2 text-white"> company</div>
          <div className="bg-army-2 p-2 text-white"> company</div>
          <div className="bg-army-2 p-2 text-white"> company</div>
          <div className="bg-army-2 p-2 text-white"> company</div>
          <div className="bg-army-2 p-2 text-white"> company</div>
          <div className="bg-army-2 p-2 text-white"> company</div>
          <div className="bg-army-2 p-2 text-white"> company</div>
        </div>
      </section>

      {/* cta */}
      <section
        style={{ backgroundImage: `url(https://picsum.photos/200)` }}
        className="container relative flex flex-col gap-4 bg-cover bg-fixed bg-no-repeat px-8 py-10 text-white "
      >
        <div className="bg-blacl/50 absolute inset-0 backdrop-blur-sm" />
        <div className="z-10 w-[50%] space-y-3">
          <h2 className="text-4xl font-semibold">
            Welcome to Ahmad Nasirin&apos;s Portfolio
          </h2>
          <small className="">
            Explore Ahmad&apos;s impressive web development projects and get in
            touch for potential collaborations.
          </small>
          <div className=" flex items-center gap-3">
            <button>Hire</button>
            <button>Download cv</button>
          </div>
        </div>
      </section>
    </main>
  );
}
