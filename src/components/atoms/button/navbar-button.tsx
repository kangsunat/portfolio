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
  active?: boolean;
}

export default function NavbarMenu({ active, children, ...props }: NavbarMenu) {
  return (
    <button {...props} className={cn(active && "font-bold", props.className)}>
      {children}
    </button>
  );
}
