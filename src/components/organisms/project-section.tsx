import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ProjectSection() {
  return (
    <div className="space-y-10 px-8 py-10">
      {/* title */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <small className="font-medium text-[#bc6c25]">Portfolio</small>
        <p className="text-2xl font-semibold text-[#283618] lg:text-4xl">
          Featured Projects
        </p>
        <small className="text-[#606c38]">Explore our portfolio of work</small>
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
            <p className="font-semibold text-[#283618]">
              {faker.commerce.productName()}
            </p>
            <small className="text-[#606c38]">
              {faker.commerce.productDescription()}
            </small>
            <small>
              <ul className="flex flex-wrap items-center gap-2 text-[#606c38]">
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
              </ul>
            </small>
            <Link
              href={"#"}
              className="flex items-center gap-2 text-[#dda15e] transition-all duration-300 hover:text-[#bc6c25]"
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
            <p className="font-semibold text-[#283618]">
              {faker.commerce.productName()}
            </p>
            <small className="line-clamp-3 text-[#606c38]">
              {faker.commerce.productDescription()}
            </small>
            <small>
              <ul className="flex flex-wrap items-center gap-2 text-[#606c38]">
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
              </ul>
            </small>
            <Link
              href={"#"}
              className="flex items-center gap-2 text-[#dda15e] transition-all duration-300 hover:text-[#bc6c25]"
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
            <p className="font-semibold text-[#283618]">
              {faker.commerce.productName()}
            </p>
            <small className="text-[#606c38]">
              {faker.commerce.productDescription()}
            </small>
            <small>
              <ul className="flex flex-wrap items-center gap-2 text-[#606c38]">
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
                <li>{faker.lorem.word()}</li>
              </ul>
            </small>
            <Link
              href={"#"}
              className="flex items-center gap-2 text-[#dda15e] transition-all duration-300 hover:text-[#bc6c25]"
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
        <button className="rounded-lg border border-[#bc6c25] px-3 py-1 text-[#bc6c25] transition-all duration-300 hover:bg-[#bc6c25] hover:text-[#fefae0]">
          View All
        </button>
      </div>
    </div>
  );
}
