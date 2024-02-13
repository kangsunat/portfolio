"use client";

import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import cn from "classnames";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  console.log("needs ", theme);

  return (
    <div className="bg-primary-500 dark:bg-accent-500 group flex items-center justify-between gap-3 rounded-full px-3 py-1 text-white transition-all duration-300">
      <i
        className="text-primary-400 dark:text-main-50"
        onClick={() => setTheme("dark")}
      >
        <IoMoon />
      </i>
      <i className="dark:text-accent-300" onClick={() => setTheme("light")}>
        <IoSunny />
      </i>
    </div>
  );
}
