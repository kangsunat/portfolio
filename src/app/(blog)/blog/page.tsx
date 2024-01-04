import React from "react";
import BlogCard from "@/components/atoms/blog/card";
import { fakerID_ID as faker } from "@faker-js/faker";
import SectionTitle from "@/components/atoms/blog/secriont-title";

export default function Page() {
  return (
    <main className="container space-y-10  px-4 py-5 md:px-8 md:py-2 lg:py-10">
      {/* Latest post */}

      <section className="space-y-10">
        <SectionTitle section="Latest post" />
        <div className="grid gap-8 md:grid-cols-2">
          <BlogCard
            wfull
            bigone
            image={faker.image.urlLoremFlickr()}
            date={String(faker.date.anytime())}
            description={faker.lorem.paragraphs()}
            title={faker.lorem.words({ max: 6, min: 5 })}
          />
          <div className="flex flex-col justify-between gap-3">
            <BlogCard
              image={faker.image.urlLoremFlickr()}
              date={String(faker.date.anytime())}
              description={faker.lorem.paragraphs()}
              title={faker.lorem.words({ max: 6, min: 5 })}
            />
            <BlogCard
              image={faker.image.urlLoremFlickr()}
              date={String(faker.date.anytime())}
              description={faker.lorem.paragraphs()}
              title={faker.lorem.words({ max: 6, min: 5 })}
            />
            <BlogCard
              image={faker.image.urlLoremFlickr()}
              date={String(faker.date.anytime())}
              description={faker.lorem.paragraphs()}
              title={faker.lorem.words({ max: 6, min: 5 })}
            />
            <BlogCard
              image={faker.image.urlLoremFlickr()}
              date={String(faker.date.anytime())}
              description={faker.lorem.paragraphs()}
              title={faker.lorem.words({ max: 6, min: 5 })}
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 md:flex-row md:justify-between">
        {/* left */}
        <div className="flex-1">
          {/* Popular post */}

          <section className="space-y-10">
            <SectionTitle section="Popular post" />
            <BlogCard
              image={faker.image.urlLoremFlickr()}
              date={String(faker.date.anytime())}
              description={faker.lorem.paragraphs()}
              title={faker.lorem.words({ max: 6, min: 5 })}
            />
            <BlogCard
              image={faker.image.urlLoremFlickr()}
              date={String(faker.date.anytime())}
              description={faker.lorem.paragraphs()}
              title={faker.lorem.words({ max: 6, min: 5 })}
            />
            <BlogCard
              image={faker.image.urlLoremFlickr()}
              date={String(faker.date.anytime())}
              description={faker.lorem.paragraphs()}
              title={faker.lorem.words({ max: 6, min: 5 })}
            />
            <BlogCard
              image={faker.image.urlLoremFlickr()}
              date={String(faker.date.anytime())}
              description={faker.lorem.paragraphs()}
              title={faker.lorem.words({ max: 6, min: 5 })}
            />
          </section>
        </div>
        {/* right */}
        <div className="w-full shrink-0 space-y-8 md:w-3/12">
          {/* ads 300 x 250*/}
          <div className="grid aspect-video h-[250px] w-full place-content-center bg-neutral-500">
            <p>sample ads card</p>
          </div>

          {/* categories */}
          <section className="space-y-3 p-4">
            <p className="font-semibold md:text-lg">Categories</p>
            <ul className="space-y-3 text-sm md:text-base">
              <li>Categori 1</li>
              <li>Categori 2</li>
              <li>Categori 4</li>
              <li>Categori 5</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
