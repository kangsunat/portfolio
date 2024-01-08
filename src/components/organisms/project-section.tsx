import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ProjectSection() {
  return (
    <div className="space-y-10 px-8 py-10">
      {/* title */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <small className="font-medium">Portfolio</small>
        <p className="text-4xl font-semibold">Featured Projects</p>
        <small>Explore our portfolio of work</small>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="space-y-4">
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt={faker.commerce.productName()}
              className="aspect-video"
            />
          </picture>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">{faker.commerce.productName()}</p>
            <small>{faker.commerce.productDescription()}</small>
            <small>
              <ul className="flex flex-wrap items-center gap-2">
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
              </ul>
            </small>
            <Link href={"#"} className="flex items-center gap-2">
              <p className="text-sm font-light">View project</p>
              <i>
                <MdKeyboardArrowRight />
              </i>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt={faker.commerce.productName()}
              className="aspect-video"
            />
          </picture>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">{faker.commerce.productName()}</p>
            <small>{faker.commerce.productDescription()}</small>
            <small>
              <ul className="flex flex-wrap items-center gap-2">
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
              </ul>
            </small>
            <Link href={"#"} className="flex items-center gap-2">
              <p className="text-sm font-light">View project</p>
              <i>
                <MdKeyboardArrowRight />
              </i>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt={faker.commerce.productName()}
              className="aspect-video"
            />
          </picture>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">{faker.commerce.productName()}</p>
            <small>{faker.commerce.productDescription()}</small>
            <small>
              <ul className="flex flex-wrap items-center gap-2">
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
              </ul>
            </small>
            <Link href={"#"} className="flex items-center gap-2">
              <p className="text-sm font-light">View project</p>
              <i>
                <MdKeyboardArrowRight />
              </i>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="border border-neutral-500 px-3 py-1">
          View All
        </button>
      </div>
    </div>
  );
}
