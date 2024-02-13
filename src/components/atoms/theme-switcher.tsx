"use client";

import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import cn from "classnames";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  console.log("needs ", theme);

  return (
    <div className="bg-primary-500 dark:bg-accent-500 group rounded-full px-3 py-1 text-white">
      <div className="flex items-center justify-between gap-3 transition-all duration-300">
        <i className="" onClick={() => setTheme("dark")}>
          <IoMoon />
        </i>
        <i className="" onClick={() => setTheme("light")}>
          <IoSunny />
        </i>
      </div>
    </div>
  );
}
