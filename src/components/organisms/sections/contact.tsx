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
      <ContactForm />
    </section>
  );
}
