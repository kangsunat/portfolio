import React from "react";
import { faker } from "@faker-js/faker";
import Pagination from "@/components/atoms/pagination";
import PortfolioCard from "@/components/atoms/portfolio/card";

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="grid gap-3 md:grid-cols-3">
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        <PortfolioCard
          id={faker.person.firstName()}
          img={faker.image.urlLoremFlickr({ category: "card" })}
        />
        {/* <Card2
          features={[""]}
          image={faker.image.urlPicsumPhotos()}
          name={faker.commerce.productName()}
          onDetail={(id) => alert(`goto ecommerce with id: ${id}`)}
          onDemo={(id) => alert(`goto demo with id: ${id}`)}
          screens={[]}
          technology={[]}
        />
        <Card2
          features={[""]}
          image={faker.image.urlPicsumPhotos()}
          name={faker.commerce.productName()}
          onDetail={() => {}}
          onDemo={() => {}}
          screens={[]}
          technology={[]}
        />
        <Card2
          features={[""]}
          image={faker.image.urlPicsumPhotos()}
          name={faker.commerce.productName()}
          onDetail={() => {}}
          onDemo={() => {}}
          screens={[]}
          technology={[]}
        />
        <Card2
          features={[""]}
          image={faker.image.urlPicsumPhotos()}
          name={faker.commerce.productName()}
          onDetail={() => {}}
          onDemo={() => {}}
          screens={[]}
          technology={[]}
        />
        <Card2
          features={[""]}
          image={faker.image.urlPicsumPhotos()}
          name={faker.commerce.productName()}
          onDetail={() => {}}
          onDemo={() => {}}
          screens={[]}
          technology={[]}
        />
        <Card2
          features={[""]}
          image={faker.image.urlPicsumPhotos()}
          name={faker.commerce.productName()}
          onDetail={() => {}}
          onDemo={() => {}}
          screens={[]}
          technology={[]}
        /> */}
      </div>
      <Pagination />
    </div>
  );
}
