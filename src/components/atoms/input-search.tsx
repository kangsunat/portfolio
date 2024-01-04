import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface tInputSearch
  extends Pick<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "onChange" | "placeholder"
  > {}

export default function InputSearch(props: tInputSearch) {
  return (
    <input
      {...props}
      type="search"
      className="w-full rounded-lg bg-transparent text-white"
    />
  );
}
