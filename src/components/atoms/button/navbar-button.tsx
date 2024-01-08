import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import cn from "classnames";

interface NavbarMenu
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  endIcon?: ReactNode;
}

export default function NavbarMenu({
  endIcon,
  children,
  ...props
}: NavbarMenu) {
  return (
    <button className={cn(endIcon && "flex items-center gap-2")} {...props}>
      {children}
      {endIcon}
    </button>
  );
}
