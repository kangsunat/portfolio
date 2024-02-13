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
        className="border-main-500 text-main-950 focus:border-main-700 dark:text-main-50 dark:border-main-200 dark:focus:border-main-100 w-full rounded-full bg-transparent focus:border-2 focus:outline-none focus:ring-0"
      />
      {meta.error && meta.touched && meta.error}
    </div>
  );
}
