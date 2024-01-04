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
        "group cursor-pointer transition-all duration-300",
      )}
    >
      <picture className="shrink-0">
        <img
          src={image}
          alt={title}
          className={cn(
            "rounded-lg transition-all duration-300",
            wfull ? "h-full w-full" : "h-auto w-20",
          )}
        />
      </picture>

      <div
        className={cn(
          bigone && "absolute bottom-2 bg-neutral-950/70 p-3",
          "space-y-1",
        )}
      >
        <p className="line-clamp-1 text-rose-500 md:text-lg">{title} </p>
        <p className="text-xs font-thin md:text-sm">20 Okt 2022</p>
        <p className="line-clamp-2 text-xs font-light md:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
