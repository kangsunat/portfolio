import Link from "next/link";
import React from "react";
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="container space-y-10">
      {/* haader */}
      <section
        className="relative bg-cover bg-no-repeat p-8 text-white"
        style={{ backgroundImage: "url(https://picsum.photos/200)" }}
      >
        <div className="z-50 text-white">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci a
            laborum corporis inventore saepe, officia fugiat eos voluptatum
            similique illo, deleniti vero deserunt nihil qui? Commodi doloribus
            error qui perferendis.
          </p>
        </div>
      </section>

      {/* cta */}
      <section className="space-y-10 p-8">
        <div className="flex flex-col gap-3">
          <small>Profesional</small>
          <h2 className="text-4xl font-semibold">Get in Touch</h2>
          <small>For any inquiries, please feel free to contact us.</small>
        </div>
        <div className="grid grid-cols-2">
          <div className="space-y-10">
            <div className="flex flex-col gap-3">
              <i className="text-2xl">
                <FaRegEnvelope />
              </i>
              <p className="text-lg font-semibold">Email</p>
              <small>
                Send us an email and we&apos;ll get back to you as soon as
                possible.
              </small>
              <Link href={"mailto:kangsunatdev@gmail.com"}>
                email@email.com
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <i className="text-2xl">
                <FaWhatsapp />
              </i>
              <p className="text-lg font-semibold">Whatsapp</p>
              <small>
                Give us a call and let&apos;s discuss how we can help you.
              </small>
              <Link href={"#"}>0822-2383-9318</Link>
            </div>
          </div>
          <form className="space-y-5">
            <h2 className="text-xl font-semibold">Custom message</h2>

            <input
              type="email"
              className="placeholder:text-coklat-2 text-coklat-1 w-full rounded-lg border border-[#dda15e] bg-transparent focus:border-[#bc6c25] focus:ring-0"
              placeholder="Fullname"
            />
            <input
              type="email"
              className="placeholder:text-coklat-2 text-coklat-1 w-full rounded-lg border border-[#dda15e] bg-transparent focus:border-[#bc6c25] focus:ring-0"
              placeholder="Email address"
            />
            <textarea
              name=""
              id=""
              cols={30}
              rows={5}
              placeholder="Type your nessage"
              className="placeholder:text-coklat-2 text-coklat-1 w-full rounded-lg border border-[#dda15e] bg-transparent focus:border-[#bc6c25] focus:ring-0"
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
}
