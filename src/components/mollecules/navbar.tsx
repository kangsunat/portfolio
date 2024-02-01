"use client";

import { FaGithub } from "react-icons/fa";
import React from "react";
import NavBtn from "../atoms/button/nav-btn";
import { IoMenu } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="container z-10 flex items-center justify-between bg-inherit p-4 py-3 md:p-8 ">
      <h2 className="text-lg font-semibold md:text-xl">
        Nasirin <span className="ml-3 text-sm">Beta</span>{" "}
      </h2>
      <ul className="hidden items-center gap-3 md:flex">
        <NavBtn href="/" label="Home" />
        <NavBtn href="/#about" label="About" />
        <NavBtn href="/portfolio" label="Portfolio" />
        <NavBtn href="/blog" label="Blog" />
        <NavBtn
          noHover
          href="https://github.com/kangsunat"
          target="_blank"
          label={
            <i className="text-2xl">
              <FaGithub />
            </i>
          }
        />
      </ul>
      <button data-tooltip-id="btn-menu" className="block text-xl md:hidden">
        <i>
          <IoMenu />
        </i>
      </button>
      <Tooltip
        id="btn-menu"
        opacity={1}
        variant="light"
        place="bottom-end"
        clickable
        style={{ zIndex: 9999 }}
      >
        <div className="w-fit">
          <ul className="space-y-3">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/portfolio"}>Portfolio</Link>
            </li>
            {/* <li>
              <Link href={"/blog"}>Blog</Link>
            </li> */}
            <li className="flex justify-center">
              <Link href={"/https://github.com/kangsunat"}>
                <i className="text-2xl">
                  <FaGithub />
                </i>
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </Tooltip>
    </header>
  );
}
