import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="container grid grid-cols-1 gap-6 px-8 py-10 lg:grid-cols-2 lg:gap-3">
      <div className="space-y-8">
        <picture>
          <img
            src={faker.image.urlLoremFlickr({ category: "text" })}
            alt="adf"
            className="aspect-video max-h-14"
          />
        </picture>
        <p className="text-[#606c38]">
          Stay up to date on the latest features and releases by joining our
          newsletter.
        </p>
        <form action="#" className="flex items-center gap-3">
          <input
            type="email"
            className="w-[50%] rounded-lg border border-[#dda15e] bg-transparent text-[#bc6c25] placeholder:text-[#dda15e] focus:border-[#bc6c25] focus:ring-0"
            placeholder="Enter email address"
          />
          <button className="font-semibold text-[#283618]">Subscribe</button>
        </form>
        <small className="text-[#606c38]">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates from our company.
        </small>
      </div>
      <div className="flex flex-col-reverse flex-wrap gap-3 lg:flex-row lg:flex-nowrap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.84304936987!2d110.33466436241527!3d-7.024552228100685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sSemarang%2C%20Semarang%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1704705232076!5m2!1sen!2sid"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-video w-full lg:flex-1"
        ></iframe>
        <div className="w-fit space-y-7 lg:shrink-0">
          <p className="font-semibold text-[#283618]">Contact :</p>
          <ul className="space-y-3 break-words ">
            <li>
              <Link href={"#"} className="flex items-center gap-2">
                <i>
                  <FaGithub />
                </i>
                <p className="text-sm">Github</p>
              </Link>
            </li>
            <li>
              <Link href={"#"} className="flex items-center gap-2">
                <i>
                  <BiLogoGmail />
                </i>
                <p className="text-sm">Email</p>
              </Link>
            </li>
            <li>
              <Link href={"#"} className="flex gap-2">
                <i>
                  <FaLocationDot />
                </i>
                <p className="text-sm">
                  Kota Semarang
                  <br className="hidden lg:block" /> Indonesia
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
