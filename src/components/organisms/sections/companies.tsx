import SectionTitle from "@/components/atoms/section-title";
import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";

export default function Companies() {
  return (
    <section className="container space-y-8 px-8">
      <SectionTitle title="Our Client" />
      <div className="grid grid-cols-3 place-items-center gap-4 md:grid-cols-8">
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "logo" })}
            alt="company logo"
            className="aspect-square rounded-lg"
          />
        </picture>
      </div>
    </section>
  );
}
