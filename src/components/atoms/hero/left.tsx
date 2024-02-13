import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function HeroLeft() {
  return (
    <div className="flex flex-col justify-between gap-3 md:justify-normal md:gap-0 md:self-center">
      <div className="space-y-4 md:space-y-8">
        {/* name */}
        <h2 className="text-2xl font-bold uppercase md:text-7xl">
          Ahmad Nasirin
        </h2>
        <p className="text-xl md:text-4xl">Website Developer</p>
      </div>
      <i className="mt-8 animate-bounce pl-[20%] text-center text-2xl">
        <MdKeyboardDoubleArrowDown />
      </i>
    </div>
  );
}
