import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <div className="h-[350px] overflow-hidden relative">
        <picture>
          <img
            src={faker.image.urlLoremFlickr({
              height: 350,
            })}
            alt=""
            className="w-full object-cover"
          />
        </picture>
        <div className="absolute bg-gradient-to-t from-black from-40% to-transparent bottom-0 inset-x-0 rounded-t-md p-4">
          <div className="container">
            <p className="text-sm">category</p>
            <h2 className="text-xl font-semibold">Judul article</h2>
            <p className="text-sm font-extralight">20 Okt 2022</p>
          </div>
        </div>
      </div>
      <main className="container py-10">
        {faker.lorem.lines({ min: 20, max: 100 })}
      </main>
    </div>
  );
}
