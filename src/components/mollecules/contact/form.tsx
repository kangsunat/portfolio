"use client";

import InputFormik from "@/components/atoms/input";
import { Form, Formik } from "formik";
import React from "react";
import { object, string } from "yup";

export default function ContactForm() {
  return (
    <Formik
      initialValues={{ fullname: "", phone: "", message: "" }}
      validationSchema={object({
        fullname: string().required().min(3),
        phone: string().matches(/^[0-9]{10}$/, "Nomor telepon tidak valid"),
        message: string().required().min(3),
      })}
      onSubmit={(values) => {
        console.log("needs ", values);
      }}
    >
      <Form className="flex w-full flex-col gap-4 p-4 md:mx-auto md:w-[50%]">
        <InputFormik name="fullname" placeholder="Fullname" />
        <InputFormik name="phone" placeholder="Phone number" />
        <InputFormik name="message" placeholder="Message" />
        <button className="mb-10 rounded-full bg-rose-500 py-2 active:bg-rose-600">
          Send
        </button>
      </Form>
    </Formik>
  );
}
