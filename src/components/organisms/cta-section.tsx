import React from "react";

export default function CTASection() {
  return (
    <section className="grid grid-cols-1 place-items-center gap-3 px-8 py-20 lg:grid-cols-2">
      <h4 className="text-army-1 text-2xl font-bold lg:text-4xl">
        Get in touch with Ahmad
      </h4>
      <div className="text-army-2 space-y-8 text-center lg:text-left">
        <p>
          If you&apos;re looking to hire a professional web developer or
          collaborate on a project, Ahmad is the right person for the job. With
          years of experience and a passion for creating stunning websites, he
          can bring your vision to life.
        </p>
        <div className="space-x-3">
          <button className="bg-coklat-1 rounded-md px-4 py-2 text-primary">
            Hire
          </button>
          <button className="text hover:bg-coklat-1 text-coklat-1 rounded-md border border-[#bc6c25] px-4 py-2 transition-all duration-300 hover:text-primary">
            Collaborate
          </button>
        </div>
      </div>
    </section>
  );
}
