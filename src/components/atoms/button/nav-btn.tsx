"use client";

import Link from "next/link";
import { ReactNode } from "react";
import cn from "classnames";
import { usePathname } from "next/navigation";

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
        !noHover &&
          "hover:text-primary-200 dark:hover:text-accent-200 cursor-pointer rounded-full px-2 ",
        router == href && "text-primary-500 dark:text-accent-500 font-semibold",
      )}
    >
      <Link href={href} target={target}>
        {label}
      </Link>
    </li>
  );
}
