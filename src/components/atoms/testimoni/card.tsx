import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";
import { FaStar } from "react-icons/fa";
import { tCardTestimoni } from "@/types/testimoni";

export default function Card({ img, name, testimoni, start }: tCardTestimoni) {
  return (
    <div className="flex flex-col text-center items-center gap-3 bg-slate-900 p-3 rounded-lg">
      <picture>
        <img
          src={img}
          alt="testimoni"
          className="h-auto w-28 rounded-full shrink-0 aspect-square bg-cover"
        />
      </picture>
      <p>&quot;{testimoni}&quot;</p>
      <div className="flex items-center gap-2">
        <i className="text-yellow-500">
          <FaStar />
        </i>
        <i className="text-yellow-500">
          <FaStar />
        </i>
        <i className="text-yellow-500">
          <FaStar />
        </i>
        <i className="text-yellow-500">
          <FaStar />
        </i>
        <i className="text-yellow-500">
          <FaStar />
        </i>
      </div>
      <p className="font-medium text-red-500">{name}</p>
    </div>
  );
}
