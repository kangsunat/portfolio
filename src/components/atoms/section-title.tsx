import React from "react";
import cn from "classnames";

export default function SectionTitle({
  title,
  quote,
  position = "center",
  color = "rose",
  quoteColor = "white",
}: {
  title: string;
  quote?: string;
  position?: "center" | "left" | "right";
  color?: "white" | "rose";
  quoteColor?: "white" | "rose";
}) {
  return (
    <div
      className={cn("flex flex-col space-y-3 ", {
        "items-center text-center": position == "center",
        "items-start text-left": position == "left",
        "items-center text-center md:items-end md:text-right":
          position == "right",
      })}
    >
      <h2
        className={cn(
          "w-fit border-b border-dashed text-2xl font-semibold md:text-4xl",
          {
            "border-rose-500 text-rose-500": color == "rose",
            "border-white text-white": color == "white",
          },
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "w-full text-xs font-light md:w-[50%] md:text-base md:font-extralight",
          !quote && "hidden",
          {
            "text-rose-500 ": quoteColor == "rose",
            "text-white ": quoteColor == "white",
          },
        )}
      >
        {quote}
      </p>
    </div>
  );
}
