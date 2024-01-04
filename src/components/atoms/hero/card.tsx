import Link from "next/link";
import React from "react";
import { FaLaravel, FaReact, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiPhp } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function HeroCard({
  image,
  thechnology,
  title,
  link = "#",
}: {
  title: string;
  image: string;
  thechnology: (
    | "javascript"
    | "nextjs"
    | "react"
    | "wordpress"
    | "express"
    | "php"
    | "laravel"
  )[];
  link?: string;
}) {
  return (
    <div className="group relative h-full w-full">
      <picture>
        <img
          src={image}
          className="aspect-video w-full rounded-lg object-cover"
          alt="dfa"
        />
      </picture>
      <div className="absolute inset-x-0 bottom-0 flex h-[50%] flex-col justify-between gap-1 rounded-b-lg bg-gradient-to-b from-transparent to-primary p-3 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 md:h-[38%] md:gap-2">
        <Link
          className="text-lg capitalize underline-offset-4 hover:underline md:text-xl"
          href={"#"}
        >
          {title}
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {thechnology.flatMap((v, i) => (
              <div key={i}>
                {v == "javascript" && (
                  <i className="text-lg text-yellow-500 transition-all duration-300 ease-in-out hover:scale-150">
                    <IoLogoJavascript />
                  </i>
                )}
                {(v == "nextjs" || v == "react") && (
                  <i className="text-lg transition-all duration-300 ease-in-out hover:scale-150 md:text-xl">
                    {v == "nextjs" && <TbBrandNextjs />}
                    {v == "react" && <FaReact />}
                  </i>
                )}
                {v == "wordpress" && (
                  <i className="text-lg transition-all duration-300 ease-in-out hover:scale-150 md:text-xl">
                    <FaWordpress />
                  </i>
                )}
                {v == "express" && (
                  <i className="text-lg transition-all duration-300 ease-in-out hover:scale-150 md:text-xl">
                    <SiExpress />
                  </i>
                )}
                {v == "php" && (
                  <i className="text-lg text-blue-500 transition-all duration-300 ease-in-out hover:scale-150 md:text-xl">
                    <SiPhp />
                  </i>
                )}
                {v == "laravel" && (
                  <i className="text-lg text-red-500 transition-all duration-300 ease-in-out hover:scale-150 md:text-xl">
                    <FaLaravel />
                  </i>
                )}
              </div>
            ))}
          </div>

          <Link
            href={link}
            target="_blank"
            className="rounded-lg border px-2 py-1 text-xs md:text-base"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
