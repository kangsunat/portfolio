import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";

export default function Project() {
  return (
    <main className="container space-y-20 ">
      {/* header */}
      <section
        className="flex flex-col gap-4 bg-cover bg-no-repeat p-8 text-white"
        style={{ backgroundImage: "url(https://picsum.photos/200)" }}
      >
        <small className="font-semibold text-coklat-1">Experience</small>
        <h2 className="text-4xl font-semibold">Creating Stunning Websites</h2>
        <small className="">
          Ahmad Nasirin is a professional web developer specializing in creating
          visually appealing and functional websites.
        </small>
      </section>

      <section className="p-8">
        <ul className="mb-5 flex items-center justify-center gap-3 text-sm font-semibold text-coklat-1">
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
          <li>Category</li>
        </ul>
        <div className="columns-4">
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt=""
              className="rounded-lg py-3"
            />
          </picture>
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt=""
              className="rounded-lg py-3"
            />
          </picture>
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt=""
              className="rounded-lg py-3"
            />
          </picture>
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt=""
              className="rounded-lg py-3"
            />
          </picture>
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt=""
              className="rounded-lg py-3"
            />
          </picture>
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt=""
              className="rounded-lg py-3"
            />
          </picture>
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt=""
              className="rounded-lg py-3"
            />
          </picture>
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt=""
              className="rounded-lg py-3"
            />
          </picture>
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt=""
              className="rounded-lg py-3"
            />
          </picture>
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt=""
              className="rounded-lg py-3"
            />
          </picture>
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt=""
              className="rounded-lg py-3"
            />
          </picture>
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt=""
              className="rounded-lg py-3"
            />
          </picture>
        </div>
      </section>
    </main>
  );
}
