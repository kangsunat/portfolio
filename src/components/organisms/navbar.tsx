"use client";

import React from "react";
import NavbarMenu from "../atoms/button/navbar-button";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="border-b border-neutral-300 px-8 py-4">
      <div className="container flex items-center gap-8">
        <h2 className="text-2xl font-bold">Logo v2</h2>
        <ul className="flex items-center gap-4">
          <li>
            <NavbarMenu>About Me</NavbarMenu>
          </li>
          <li>
            <NavbarMenu>Projects</NavbarMenu>
          </li>
          <li>
            <NavbarMenu>Services</NavbarMenu>
          </li>
          <li>
            <NavbarMenu
              endIcon={
                <i>
                  <MdKeyboardArrowRight />
                </i>
              }
            >
              More
            </NavbarMenu>
          </li>
        </ul>
      </div>
    </header>
  );
}
