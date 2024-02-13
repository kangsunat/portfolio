import SectionTitle from "@/components/atoms/section-title";
import ContactForm from "@/components/mollecules/contact/form";
import React from "react";

export default function Contact() {
  return (
    <section className="container space-y-10 py-5 md:py-10">
      <SectionTitle
        title={`Let's Talk`}
        quote="Connect with us: where inquiries meet solutions, and conversations spark possibilities."
      />
      {/* <ContactForm /> */}
      <button className="mb-10 rounded-full bg-rose-500 py-2 active:bg-rose-600">
        Send
      </button>
    </section>
  );
}
