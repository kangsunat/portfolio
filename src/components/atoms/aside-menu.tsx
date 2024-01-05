"use client";

import React, { useState } from "react";
import cn from "classnames";
import { RiArrowRightSFill } from "react-icons/ri";

type tAssideMenu = {
  title: string;
  items: string[];
};

export default function AsideMenu({ items, title }: tAssideMenu) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className={cn("space-y-2 overflow-hidden transition-all duration-300")}
    >
      <button
        className={cn(
          "flex w-full items-center justify-between text-lg",
          open && "text-cyan-500",
        )}
        onClick={() => setOpen(!open)}
      >
        <p className={cn("text-sm capitalize md:text-base")}>{title}</p>
        <i className={cn("transition-all duration-300", open && "rotate-90 ")}>
          <RiArrowRightSFill />
        </i>
      </button>

      <ul
        className={cn(
          "space-y-2 overflow-hidden pl-2 text-sm transition-all duration-300",
          !open ? "max-h-0" : "max-h-[1000px]",
        )}
      >
        {items.map((v, i) => (
          <li key={i} className="flex gap-2">
            <input type="checkbox" className="rounded-full bg-transparent" />
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}
