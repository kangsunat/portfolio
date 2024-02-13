"use client";

import InputFormik from "@/components/atoms/input";
import { Form, Formik } from "formik";
import React from "react";
import { object, string } from "yup";

export default function ContactForm() {
  return (
    <Formik
      initialValues={{ fullname: "", phone: "", message: "", email: "" }}
      validationSchema={object({
        fullname: string().required().min(3),
        phone: string().required().min(9).max(13),
        message: string().required().min(3),
        email: string().required().email().min(3),
      })}
      onSubmit={(values) => {
        console.log("needs ", values);

        const { fullname, phone, email, message } = values;
        const subject = "New Contact Form Submission";
        const body = `Fullname: ${fullname}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
        window.open(
          `mailto:kangsunatdev@gmail.com?subject=${encodeURIComponent(
            subject,
          )}&body=${encodeURIComponent(body)}`,
        );
      }}
    >
      {({ handleSubmit, errors }) => (
        <Form className="flex w-full flex-col gap-4 p-4 md:mx-auto md:w-[50%]">
          <>{console.log("needs error", errors)}</>
          <InputFormik name="fullname" placeholder="Fullname" />
          <InputFormik name="phone" placeholder="Phone number" />
          <InputFormik name="email" placeholder="Email address" />
          <InputFormik name="message" placeholder="Message" />
          <button
            type="submit"
            onClick={() => handleSubmit()}
            className="mb-10 rounded-full bg-rose-500 py-2 active:bg-rose-600"
          >
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}
