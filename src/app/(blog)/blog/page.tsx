import React from "react";
import BlogCard from "@/components/atoms/blog/card";
import { fakerID_ID as faker } from "@faker-js/faker";
import SectionTitle from "@/components/atoms/blog/secriont-title";

export default function Page() {
  return (
    <main className="container space-y-10 py-10 px-8">
      {/* Latest post */}

      <section className="space-y-10">
        <SectionTitle section="Latest post" />
        <div className="grid grid-cols-2 gap-8">
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
      <section className="flex justify-between gap-8">
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
        <div className="shrink-0 w-3/12 space-y-8">
          {/* ads 300 x 250*/}
          <div className="bg-neutral-500 h-[250px] w-full grid place-content-center">
            <p>sample ads card</p>
          </div>

          {/* categories */}
          <section className="p-4 space-y-3">
            <p className="font-semibold text-lg">Categories</p>
            <ul className="space-y-3">
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
