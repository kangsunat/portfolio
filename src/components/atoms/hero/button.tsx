"use client";

import React, { HTMLAttributes, ReactNode } from "react";
import cn from "classnames";

export default function HeroBtn({
  icon,
  ...props
}: {
  icon: ReactNode;
} & Pick<HTMLAttributes<HTMLButtonElement>, "id" | "className" | "onClick">) {
  return (
    <button
      {...props}
      className={cn(
        "border shadow shadow-rose-500 border-rose-500 rounded-full p-1 bg-rose-500 active:scale-95 transition-all duration-300",
        props.className
      )}
    >
      {icon}
    </button>
  );
}
