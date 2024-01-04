import React from "react";
import cn from "classnames";

export default function BlogCard({
  wfull,
  bigone,
  date,
  description,
  image,
  title,
}: {
  wfull?: Boolean;
  bigone?: boolean;
  title: string;
  date: string;
  description: string;
  image: string;
}) {
  return (
    <div
      className={cn(
        "relative",
        !bigone && "flex gap-3 hover:bg-slate-900",
        "transition-all duration-300 cursor-pointer group"
      )}
    >
      <picture className="shrink-0">
        <img
          src={image}
          alt={title}
          className={cn(
            "transition-all duration-300 rounded-lg",
            wfull ? "w-full h-full" : "w-20 h-auto"
          )}
        />
      </picture>

      <div
        className={cn(
          bigone && "absolute bottom-5 p-3 bg-neutral-950/70",
          "space-y-1"
        )}
      >
        <p className="line-clamp-1 text-rose-500 text-lg">{title} </p>
        <p className="font-thin text-sm">20 Okt 2022</p>
        <p className="line-clamp-2 text-sm font-light">{description}</p>
      </div>
    </div>
  );
}
