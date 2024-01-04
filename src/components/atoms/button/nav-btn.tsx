"use client";

import Link from "next/link";
import { ReactNode } from "react";
import cn from "classnames";
import { usePathname, useParams } from "next/navigation";

type tNavbtn = {
  label: ReactNode;
  href: string;
  target?: string;
  noHover?: boolean;
};

export default function NavBtn({ label, href, target, noHover }: tNavbtn) {
  const router = usePathname();

  return (
    <li
      className={cn(
        "text-lg transition-all duration-500 ease-in-out active:scale-95",
        !noHover && "cursor-pointer rounded-full px-2 hover:text-rose-500 ",
        router == href && "font-semibold text-rose-500",
      )}
    >
      <Link href={href} target={target}>
        {label}
      </Link>
    </li>
  );
}
