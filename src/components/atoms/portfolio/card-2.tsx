import React from "react";

type tCard2 = {
  name: string;
  technology: string[];
  screens: ("desktop" | "mobile" | "website")[];
  features: string[];
  onClick: () => void;
  image: string;
};

export default function Card2({
  name,
  technology,
  features,
  screens,
  image,
  ...props
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
      <div className="p-2">
        <h2 className="font-semibold">App name</h2>

        <div className="flex items-center justify-end">
          <button {...props} className="text-sm">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
