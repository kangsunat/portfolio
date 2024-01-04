import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";
import Link from "next/link";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLaravel, FaReact, FaWordpress } from "react-icons/fa";
import { SiExpress, SiPhp } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Index() {
  // console.log("faker img ", faker.image.urlPicsumPhotos());

  return (
    <div className=" group relative">
      <div className="transition-all duration-300 absolute inset-x-0 h-[50%] bottom-0 group-hover:bg-slate-950/30 group-hover:backdrop-blur-sm opacity-0 group-hover:opacity-100 p-4 flex justify-between flex-col">
        <button className="line-clamp-3 text-lg hover:underline underline-offset-4 text-left w-fit">
          {faker.commerce.productName()}
        </button>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-light">Build with</p>
            <div className="flex items-center gap-3">
              <i className="transition-all duration-300 ease-in-out hover:scale-150 text-yellow-500 text-lg">
                <IoLogoJavascript />
              </i>
              <i className="transition-all duration-300 ease-in-out hover:scale-150 text-xl">
                <TbBrandNextjs />
              </i>
              <i className="transition-all duration-300 ease-in-out hover:scale-150 text-xl">
                <FaReact />
              </i>

              <i className="transition-all duration-300 ease-in-out hover:scale-150">
                <FaWordpress />
              </i>

              <i className="transition-all duration-300 ease-in-out hover:scale-150 text-lg">
                <SiExpress />
              </i>

              <i className="transition-all duration-300 ease-in-out hover:scale-150 text-2xl text-blue-500">
                <SiPhp />
              </i>

              <i className="transition-all duration-300 ease-in-out hover:scale-150 text-lg text-red-500">
                <FaLaravel />
              </i>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-3">
            <button className="rounded-full px-2 border text-sm">Detail</button>
          </div>
        </div>
      </div>
      <picture>
        <img
          src={faker.image.urlPicsumPhotos()}
          alt="portfolio"
          className="rounded-lg"
        />
      </picture>
    </div>
  );
}
