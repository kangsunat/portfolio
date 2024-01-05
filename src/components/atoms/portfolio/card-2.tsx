"use client";

import React from "react";

type tCard2 = {
  name: string;
  technology: string[];
  screens: ("desktop" | "mobile" | "website")[];
  features: string[];
  onDetail: (id?: string) => void;
  onDemo: (id?: string) => void;
  image: string;
};

export default function Card2({
  name,
  technology,
  features,
  screens,
  image,
  onDemo,
  onDetail,
}: tCard2) {
  return (
    <div className="rounded-md bg-slate-500 shadow-md transition-all duration-300 hover:shadow-cyan-500 ">
      <div className="relative">
        <picture>
          <img
            src={image}
            alt=""
            className="aspect-video h-[60%] rounded-t-lg bg-cover"
          />
        </picture>
      </div>
      <div className="space-y-3 p-2">
        <h2 className="font-semibold">App name</h2>

        <div className="flex items-center justify-between">
          <button onClick={() => onDemo("id product")} className="text-sm">
            Demo
          </button>
          <button onClick={() => onDetail("id product")} className="text-sm">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
