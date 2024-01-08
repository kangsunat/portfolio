import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";

export default function BlogSection() {
  return (
    <section className="space-y-10 px-8 py-10">
      {/* title */}
      <div className="flex flex-col gap-3">
        <small className="font-medium text-[#bc6c25]">Latest</small>
        <p className="text-2xl font-semibold text-[#283618] lg:text-4xl">
          Stay Updated with Our Blogs
        </p>
        <small className="text-[#606c38]">
          Read our latest blog entries to learn more about web development.
        </small>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-row gap-4">
          <picture>
            <img
              src={faker.image.urlLoremFlickr({ category: "article" })}
              alt="asdf"
              className="aspect-square w-32 rounded-lg bg-cover object-cover md:w-40 md:shrink-0"
            />
          </picture>
          <div className="flex flex-1 flex-col gap-3">
            <small className="font-medium text-[#bc6c25]">
              {faker.helpers.arrayElement(["Web", "Design", "Mobile", "Other"])}
            </small>
            <p className="font-semibold text-[#283618]">
              {faker.lorem.words()}
            </p>
            <small className="line-clamp-2 text-[#606c38]">
              {faker.lorem.lines()}
            </small>
            <div className="flex items-center gap-3 text-[#283618]">
              <picture>
                <img
                  src={faker.image.avatar()}
                  alt=""
                  className="aspect-square w-10 rounded-full"
                />
              </picture>
              <div>
                <p className="text-sm font-medium">{faker.person.fullName()}</p>
                <small>11 Jan 2022</small>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <picture>
            <img
              src={faker.image.urlLoremFlickr({ category: "article" })}
              alt="asdf"
              className="aspect-square w-32 rounded-lg bg-cover object-cover md:w-40 md:shrink-0"
            />
          </picture>
          <div className="flex flex-1 flex-col gap-3">
            <small className="font-medium text-[#bc6c25]">
              {faker.helpers.arrayElement(["Web", "Design", "Mobile", "Other"])}
            </small>
            <p className="font-semibold text-[#283618]">
              {faker.lorem.words()}
            </p>
            <small className="line-clamp-2 text-[#606c38]">
              {faker.lorem.lines()}
            </small>
            <div className="flex items-center gap-3 text-[#283618]">
              <picture>
                <img
                  src={faker.image.avatar()}
                  alt=""
                  className="aspect-square w-10 rounded-full"
                />
              </picture>
              <div>
                <p className="text-sm font-medium">{faker.person.fullName()}</p>
                <small>11 Jan 2022</small>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <picture>
            <img
              src={faker.image.urlLoremFlickr({ category: "article" })}
              alt="asdf"
              className="aspect-square w-32 rounded-lg bg-cover object-cover md:w-40 md:shrink-0"
            />
          </picture>
          <div className="flex flex-1 flex-col gap-3">
            <small className="font-medium text-[#bc6c25]">
              {faker.helpers.arrayElement(["Web", "Design", "Mobile", "Other"])}
            </small>
            <p className="font-semibold text-[#283618]">
              {faker.lorem.words()}
            </p>
            <small className="line-clamp-2 text-[#606c38]">
              {faker.lorem.lines()}
            </small>
            <div className="flex items-center gap-3 text-[#283618]">
              <picture>
                <img
                  src={faker.image.avatar()}
                  alt=""
                  className="aspect-square w-10 rounded-full"
                />
              </picture>
              <div>
                <p className="text-sm font-medium">{faker.person.fullName()}</p>
                <small>11 Jan 2022</small>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <picture>
            <img
              src={faker.image.urlLoremFlickr({ category: "article" })}
              alt="asdf"
              className="aspect-square w-32 rounded-lg bg-cover object-cover md:w-40 md:shrink-0"
            />
          </picture>
          <div className="flex flex-1 flex-col gap-3">
            <small className="font-medium text-[#bc6c25]">
              {faker.helpers.arrayElement(["Web", "Design", "Mobile", "Other"])}
            </small>
            <p className="font-semibold text-[#283618]">
              {faker.lorem.words()}
            </p>
            <small className="line-clamp-2 text-[#606c38]">
              {faker.lorem.lines()}
            </small>
            <div className="flex items-center gap-3 text-[#283618]">
              <picture>
                <img
                  src={faker.image.avatar()}
                  alt=""
                  className="aspect-square w-10 rounded-full"
                />
              </picture>
              <div>
                <p className="text-sm font-medium">{faker.person.fullName()}</p>
                <small>11 Jan 2022</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="rounded-md border border-[#bc6c25] px-2 py-1 text-[#bc6c25] hover:bg-[#bc6c25] hover:text-[#fefae0]">
          Read more
        </button>
      </div>
    </section>
  );
}
