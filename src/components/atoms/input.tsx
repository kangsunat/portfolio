"use client";

import { useField } from "formik";
import React from "react";

export default function InputFormik({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  const [field, meta, helper] = useField(name);

  return (
    <div>
      <input
        {...field}
        placeholder={placeholder}
        className="w-full rounded-full border-white bg-transparent text-white focus:border-2 focus:border-white focus:outline-none focus:ring-0"
      />
    </div>
  );
}
