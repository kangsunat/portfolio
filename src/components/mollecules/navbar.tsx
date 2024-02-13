"use client";

import { FaGithub } from "react-icons/fa";
import React from "react";
import NavBtn from "../atoms/button/nav-btn";
import { IoMenu } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import Link from "next/link";
import ThemeSwitcher from "../atoms/theme-switcher";

export default function Navbar() {
  return (
    <header className="container z-10 flex items-center justify-end bg-inherit p-4 py-3 md:p-8 ">
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <Link href="https://github.com/kangsunat" target="_blank">
          <i className="text-2xl">
            <FaGithub />
          </i>
        </Link>
      </div>
    </header>
  );
}
