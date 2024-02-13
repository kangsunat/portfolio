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
      <div className="mt-40 flex flex-col items-center gap-4">
        <small className="text-primary-200 font-light">scroll down</small>
        <i className="text-primary-200 border-primary-200 mx-auto  animate-bounce rounded-full border p-2 text-center text-2xl">
          <MdKeyboardDoubleArrowDown />
        </i>
      </div>
    </div>
  );
}
