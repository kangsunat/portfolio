"use client";

import React, { useState } from "react";
import cn from "classnames";

export default function Menu() {
  const [portfolio, setPortfolio] = useState("website");
  return (
    <div className="shrink-0">
      <ul className="space-y-3 w-[10vw] border rounded-lg p-2 border-rose-500 shadow-md shadow-rose-400">
        <li
          className={cn(
            "rounded-md cursor-pointer p-1",
            portfolio == "website" && "bg-rose-400"
          )}
          onClick={() => setPortfolio("website")}
        >
          Website
        </li>
        <li
          className={cn(
            "rounded-md cursor-pointer p-1",
            portfolio == "android" && "bg-rose-400"
          )}
          onClick={() => setPortfolio("android")}
        >
          Android
        </li>
        <li
          className={cn(
            "rounded-md cursor-pointer p-1",
            portfolio == "desktop" && "bg-rose-400"
          )}
          onClick={() => setPortfolio("desktop")}
        >
          Desktop
        </li>
        <li
          className={cn(
            "rounded-md cursor-pointer p-1",
            portfolio == "wordpress" && "bg-rose-400"
          )}
          onClick={() => setPortfolio("wordpress")}
        >
          Wordpress
        </li>
      </ul>
    </div>
  );
}
