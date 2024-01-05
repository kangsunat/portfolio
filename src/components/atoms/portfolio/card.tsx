"use client";

import React, { ReactNode } from "react";
import { FaLaravel, FaReact, FaWordpress } from "react-icons/fa";
import { SiExpress, SiPhp } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Tooltip } from "react-tooltip";

export default function PortfolioCard({
  id,
  img,
  content,
}: {
  img: string;
  id: string;
  content?: ReactNode;
}) {
  return (
    <div className="group overflow-hidden" data-tooltip-id={id}>
      <picture>
        <img
          src={img}
          alt="portfolio card"
          className="rounded-md transition-all duration-300 group-hover:scale-110"
        />
      </picture>
      <Tooltip
        id={id}
        clickable
        delayShow={300}
        opacity={1}
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: 10,
        }}
      >
        <div className="w-[80vw] space-y-5 md:w-[30vw]">
          <p className="line-clamp-3 text-sm capitalize md:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            tempore dolores doloremque quidem rerum quis sit facilis enim
            delectus! Omnis, tempora? Minima in nulla cumque officiis doloremque
            mollitia molestias voluptatem!
          </p>
          <ul className="flex flex-wrap items-center gap-3">
            <li>
              <i className="text-lg transition-all duration-300 ease-in-out hover:scale-150 md:text-xl">
                <TbBrandNextjs />
              </i>
            </li>
            <li>
              <i className="text-lg transition-all duration-300 ease-in-out hover:scale-150 md:text-xl">
                <FaReact />
              </i>
            </li>
            <li>
              <i className="text-lg transition-all duration-300 ease-in-out hover:scale-150 md:text-xl">
                <FaWordpress />
              </i>
            </li>
            <li>
              <i className="text-lg transition-all duration-300 ease-in-out hover:scale-150 md:text-xl">
                <SiExpress />
              </i>
            </li>
            <li>
              <i className="text-lg text-blue-500 transition-all duration-300 ease-in-out hover:scale-150 md:text-xl">
                <SiPhp />
              </i>
            </li>
            <li>
              <i className="text-lg text-red-500 transition-all duration-300 ease-in-out hover:scale-150 md:text-xl">
                <FaLaravel />
              </i>
            </li>
          </ul>

          <div className="space-y-2">
            <button
              type="button"
              className="w-full rounded-full bg-rose-500 py-2 text-xs text-white md:py-1 md:text-base"
              onClick={() => alert("goto detail")}
            >
              Detail
            </button>
            <button
              type="button"
              className="w-full rounded-full bg-green-500 py-2 text-xs text-white md:py-1 md:text-base"
              onClick={() => alert("goto order")}
            >
              Order
            </button>
          </div>
        </div>
      </Tooltip>
    </div>
  );
}
