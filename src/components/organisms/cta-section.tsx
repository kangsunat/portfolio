import React from "react";

export default function CTASection() {
  return (
    <section className="grid grid-cols-2 place-items-center gap-3 px-8 py-10">
      <h4 className="text-4xl font-bold">Get in touch with Ahmad</h4>
      <div className="space-y-8">
        <p>
          If you&apos;re looking to hire a professional web developer or
          collaborate on a project, Ahmad is the right person for the job. With
          years of experience and a passion for creating stunning websites, he
          can bring your vision to life.
        </p>
        <div className="space-x-3">
          <button className="bg-black px-4 py-2 text-white">Hire</button>
          <button className="border border-neutral-500 px-4 py-2">
            Collaborate
          </button>
        </div>
      </div>
    </section>
  );
}
