"use client";

import React, { useEffect, useState } from "react";
import NavbarMenu from "../atoms/button/navbar-button";
import { IoIosMenu } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import cn from "classnames";
import useContainer from "@/hooks/useContainer";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const container = useContainer();

  return (
    <header className="relative px-8 py-4">
      <div className="gap- container flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#bc6c25]">Logo v2</h2>
        <button className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
          <i>
            <IoIosMenu />
          </i>
        </button>
        {/* tablet >= */}
        <ul className={cn("hidden items-center gap-4 md:flex")}>
          <li>
            <NavbarMenu
              active={pathname == "/"}
              onClick={() => router.push("/")}
            >
              Home
            </NavbarMenu>
          </li>
          <li>
            <NavbarMenu
              active={pathname == "/about"}
              onClick={() => router.push("/about")}
            >
              About
            </NavbarMenu>
          </li>
          <li>
            <NavbarMenu
              active={pathname == "/projects"}
              onClick={() => router.push("/projects")}
            >
              Projects
            </NavbarMenu>
          </li>
          <li>
            <NavbarMenu
              active={pathname == "/blog"}
              onClick={() => router.push("/blog")}
            >
              Blog
            </NavbarMenu>
          </li>
          <li>
            <NavbarMenu
              active={pathname == "/contact"}
              onClick={() => router.push("/contact")}
            >
              Contact
            </NavbarMenu>
          </li>
        </ul>

        {/* mobile */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 translate-y-16 overflow-hidden bg-white shadow-sm shadow-neutral-300 transition-all duration-300 md:hidden",
            open ? "max-h-96  p-8" : "max-h-0 p-0",
          )}
        >
          <ul className="space-y-4">
            <li>
              <NavbarMenu active={pathname == "/"}>Home</NavbarMenu>
            </li>
            <li>
              <NavbarMenu active={pathname == "/about"}>About</NavbarMenu>
            </li>
            <li>
              <NavbarMenu active={pathname == "/projects"}>Projects</NavbarMenu>
            </li>
            <li>
              <NavbarMenu active={pathname == "/blog"}>Blog</NavbarMenu>
            </li>
            <li>
              <NavbarMenu active={pathname == "/contact"}>Contact</NavbarMenu>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
