"use client";

import Link from "next/link";
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
        place="right"
        delayShow={300}
        opacity={1}
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: 10,
        }}
      >
        <div className="w-[30vw] space-y-5">
          <p className="line-clamp-3 capitalize md:text-lg">
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

          <button
            type="button"
            className="w-full rounded-full bg-rose-500 py-1 text-xs text-white md:text-base"
          >
            Detail
          </button>
        </div>
      </Tooltip>
    </div>
  );
}
