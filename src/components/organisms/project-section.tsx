import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ProjectSection() {
  return (
    <div className="space-y-10 px-8 py-10">
      {/* title */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <small className="text-coklat-1 font-medium">Portfolio</small>
        <p className="text-army-1 text-2xl font-semibold lg:text-4xl">
          Featured Projects
        </p>
        <small className="text-army-2">Explore our portfolio of work</small>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="space-y-4">
          <picture>
            <img
              src={faker.image.urlLoremFlickr()}
              alt={faker.commerce.productName()}
              className="aspect-video rounded-lg"
            />
          </picture>
          <div className="flex flex-col gap-3">
            <p className="text-army-1 font-semibold">
              {faker.commerce.productName()}
            </p>
            <small className="text-army-2">
              {faker.commerce.productDescription()}
            </small>
            <small>
              <ul className="text-army-2 flex flex-wrap items-center gap-2">
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
              </ul>
            </small>
            <Link
              href={"#"}
              className="text-coklat-2 hover:text-coklat-1 flex items-center gap-2 transition-all duration-300"
            >
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
              className="aspect-video rounded-lg"
            />
          </picture>
          <div className="flex flex-col gap-3">
            <p className="text-army-1 font-semibold">
              {faker.commerce.productName()}
            </p>
            <small className="text-army-2 line-clamp-3">
              {faker.commerce.productDescription()}
            </small>
            <small>
              <ul className="text-army-2 flex flex-wrap items-center gap-2">
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
              </ul>
            </small>
            <Link
              href={"#"}
              className="text-coklat-2 hover:text-coklat-1 flex items-center gap-2 transition-all duration-300"
            >
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
              className="aspect-video rounded-lg"
            />
          </picture>
          <div className="flex flex-col gap-3">
            <p className="text-army-1 font-semibold">
              {faker.commerce.productName()}
            </p>
            <small className="text-army-2">
              {faker.commerce.productDescription()}
            </small>
            <small>
              <ul className="text-army-2 flex flex-wrap items-center gap-2">
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
              </ul>
            </small>
            <Link
              href={"#"}
              className="text-coklat-2 hover:text-coklat-1 flex items-center gap-2 transition-all duration-300"
            >
              <p className="text-sm font-light">View project</p>
              <i>
                <MdKeyboardArrowRight />
              </i>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="hover:bg-coklat-1 text-coklat-1 rounded-lg border border-[#bc6c25] px-3 py-1 transition-all duration-300 hover:text-primary">
          View All
        </button>
      </div>
    </div>
  );
}
