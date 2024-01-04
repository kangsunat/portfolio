import React from "react";
import { FaLaravel, FaReact, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiPhp } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { fakerID_ID as fake } from "@faker-js/faker";

export default function HeroLeft() {
  return (
    <div className="flex flex-col justify-between gap-3 md:justify-normal md:gap-0 md:self-center">
      <div className="space-y-4 md:space-y-8">
        {/* name */}
        <h2 className="text-2xl uppercase md:text-7xl">
          {fake.person.fullName()}
        </h2>

        {/* position and technology */}
        <div className="space-y-3">
          <p className="text-xl md:text-4xl">{fake.person.jobType()}</p>
          <div className="dm:gap-4 flex items-center gap-2">
            <i className="text-lg text-yellow-500">
              <IoLogoJavascript />
            </i>
            <i className="text-xl">
              <TbBrandNextjs />
            </i>
            <i className="text-xl">
              <FaReact />
            </i>
            <i>
              <FaWordpress />
            </i>
            <i className="flex items-center text-lg">
              <SiExpress /> <p className="text-xs font-thin">pressjs</p>
            </i>
            <i className="text-2xl text-blue-500">
              <SiPhp />
            </i>
            <i className="flex items-center text-lg text-red-500">
              <FaLaravel /> <small className="text-xs font-thin">Laravel</small>
            </i>
          </div>
        </div>
      </div>
      <button className="w-fit rounded-full bg-red-600 px-4 py-1 text-sm active:scale-95 md:mt-20 md:px-6 md:py-2 md:text-base">
        Let&apos;s Talk
      </button>
    </div>
  );
}
