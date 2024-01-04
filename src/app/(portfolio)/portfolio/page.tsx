"use client";

import Card2 from "@/components/atoms/portfolio/card-2";
import React from "react";
import { faker } from "@faker-js/faker";

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-3">
        <Card2
          features={[""]}
          image={faker.image.urlPicsumPhotos()}
          name={faker.commerce.productName()}
          onClick={() => {}}
          screens={[]}
          technology={[]}
        />
        <Card2
          features={[""]}
          image={faker.image.urlPicsumPhotos()}
          name={faker.commerce.productName()}
          onClick={() => {}}
          screens={[]}
          technology={[]}
        />
        <Card2
          features={[""]}
          image={faker.image.urlPicsumPhotos()}
          name={faker.commerce.productName()}
          onClick={() => {}}
          screens={[]}
          technology={[]}
        />
        <Card2
          features={[""]}
          image={faker.image.urlPicsumPhotos()}
          name={faker.commerce.productName()}
          onClick={() => {}}
          screens={[]}
          technology={[]}
        />
        <Card2
          features={[""]}
          image={faker.image.urlPicsumPhotos()}
          name={faker.commerce.productName()}
          onClick={() => {}}
          screens={[]}
          technology={[]}
        />
        <Card2
          features={[""]}
          image={faker.image.urlPicsumPhotos()}
          name={faker.commerce.productName()}
          onClick={() => {}}
          screens={[]}
          technology={[]}
        />
      </div>
      <div>pagination</div>
    </div>
  );
}
