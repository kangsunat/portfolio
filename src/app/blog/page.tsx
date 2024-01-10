import React from "react";
import { fakerID_ID as faker } from "@faker-js/faker";
import { IoIosLink, IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Blog() {
  return (
    <main className="container space-y-20 p-8">
      {/* latest post */}
      <section className="flex flex-col gap-4">
        <small className="text-coklat-1">Latest Posts</small>
        <div className="my-4">
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium text-army-2"> tag 1 </p>
            <p className="text-sm font-medium text-army-2"> tag 1 </p>
          </div>
          <h2 className="text-4xl font-semibold text-army-1">
            {faker.lorem.words()}
          </h2>
        </div>
        <picture>
          <img
            src={faker.image.urlLoremFlickr()}
            alt=""
            className="aspect-video w-full rounded-md"
          />
        </picture>
        <div className="flex items-center justify-between">
          <div className="flex gap-8">
            <ul>
              <li>
                <p className="font-light text-coklat-1">Written by</p>
              </li>
              <li>
                <p className="font-semibold text-army-2">Admin </p>
              </li>
            </ul>
            <ul>
              <li>
                <p className="font-light text-coklat-1">Published on</p>
              </li>
              <li>
                <p className="font-semibold text-army-2">22 Oktober 2024 </p>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <i>
              <IoIosLink />
            </i>
            <i>
              <FaLinkedin />
            </i>
            <i>
              <FaFacebook />
            </i>
          </div>
        </div>
      </section>

      {/* contect list */}
      <section className="flex justify-between gap-5 ">
        <div className="w-3/12 shrink-0 space-y-5 divide-y divide-army-1">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-bold text-coklat-1">Categories</p>
            <ul className="text-coklat-2">
              <li>Category </li>
              <li>Category </li>
              <li>Category </li>
              <li>Category </li>
            </ul>
          </div>
          <div className="space-y-5 py-2">
            <p className="text-lg font-bold text-coklat-1">
              Subscribe to newsletter
            </p>
            <form action="#" className=" flex flex-col gap-3">
              <input
                type="email"
                className="w-full rounded-md border border-coklat-2 bg-transparent text-coklat-1 placeholder:text-coklat-2 focus:border-coklat-1 focus:ring-0"
                placeholder="Enter email address"
              />
              <button className="rounded-md bg-coklat-2 py-1 font-semibold text-army-1">
                Subscribe
              </button>
            </form>
            <small>By subscribing you agree to with our Privacy Policy.</small>
          </div>
          <div className="space-y-3 py-2">
            <p className="font-semibold text-coklat-1">Share</p>
            <ul className="flex items-center gap-3">
              <li>
                <i className="text-army-1">
                  <IoIosLink />
                </i>
              </li>
              <li>
                <i className="text-blue-500">
                  <FaLinkedin />
                </i>
              </li>
              <li>
                <i className="text-blue-700">
                  <FaFacebook />
                </i>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <article className="flex gap-4">
            <picture>
              <img
                src={faker.image.urlLoremFlickr()}
                alt=""
                className="aspect-auto w-32 shrink-0 bg-cover"
              />
            </picture>
            <div className="flex-1 space-y-3">
              <div className="space-y-1">
                <ul className="flex items-center gap-3 text-xs text-coklat-1">
                  <li>category </li>
                  <li>category </li>
                </ul>
                <p className="text-lg font-semibold text-army-1">
                  {faker.lorem.words()}
                </p>
              </div>
              <small className="line-clamp-3 text-army-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis pariatur laudantium accusantium molestias, adipisci
                reprehenderit, alias doloribus, odio consequatur maxime aperiam
                quas omnis neque blanditiis harum doloremque. Sunt, doloremque
                maiores?
              </small>
              <div className="flex items-center justify-between">
                <div className="flex gap-8">
                  <ul className="flex gap-3 divide-x divide-army-2 text-sm">
                    <li>
                      <p className="text-army-2">Admin </p>
                    </li>
                    <li>
                      <p className="px-2 text-army-2">22 Oktober 2024 </p>
                    </li>
                  </ul>
                </div>
                <button className="text-sm text-army-1">Rad more</button>
              </div>
            </div>
          </article>
          <article className="flex gap-4">
            <picture>
              <img
                src={faker.image.urlLoremFlickr()}
                alt=""
                className="aspect-auto w-32 shrink-0 bg-cover"
              />
            </picture>
            <div className="flex-1 space-y-3">
              <div className="space-y-1">
                <ul className="flex items-center gap-3 text-xs text-coklat-1">
                  <li>category </li>
                  <li>category </li>
                </ul>
                <p className="text-lg font-semibold text-army-1">
                  {faker.lorem.words()}
                </p>
              </div>
              <small className="line-clamp-3 text-army-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis pariatur laudantium accusantium molestias, adipisci
                reprehenderit, alias doloribus, odio consequatur maxime aperiam
                quas omnis neque blanditiis harum doloremque. Sunt, doloremque
                maiores?
              </small>
              <div className="flex items-center justify-between">
                <div className="flex gap-8">
                  <ul className="flex gap-3 divide-x divide-army-2 text-sm">
                    <li>
                      <p className="text-army-2">Admin </p>
                    </li>
                    <li>
                      <p className="px-2 text-army-2">22 Oktober 2024 </p>
                    </li>
                  </ul>
                </div>
                <button className="text-sm text-army-1">Rad more</button>
              </div>
            </div>
          </article>
          <article className="flex gap-4">
            <picture>
              <img
                src={faker.image.urlLoremFlickr()}
                alt=""
                className="aspect-auto w-32 shrink-0 bg-cover"
              />
            </picture>
            <div className="flex-1 space-y-3">
              <div className="space-y-1">
                <ul className="flex items-center gap-3 text-xs text-coklat-1">
                  <li>category </li>
                  <li>category </li>
                </ul>
                <p className="text-lg font-semibold text-army-1">
                  {faker.lorem.words()}
                </p>
              </div>
              <small className="line-clamp-3 text-army-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis pariatur laudantium accusantium molestias, adipisci
                reprehenderit, alias doloribus, odio consequatur maxime aperiam
                quas omnis neque blanditiis harum doloremque. Sunt, doloremque
                maiores?
              </small>
              <div className="flex items-center justify-between">
                <div className="flex gap-8">
                  <ul className="flex gap-3 divide-x divide-army-2 text-sm">
                    <li>
                      <p className="text-army-2">Admin </p>
                    </li>
                    <li>
                      <p className="px-2 text-army-2">22 Oktober 2024 </p>
                    </li>
                  </ul>
                </div>
                <button className="text-sm text-army-1">Rad more</button>
              </div>
            </div>
          </article>
          <article className="flex gap-4">
            <picture>
              <img
                src={faker.image.urlLoremFlickr()}
                alt=""
                className="aspect-auto w-32 shrink-0 bg-cover"
              />
            </picture>
            <div className="flex-1 space-y-3">
              <div className="space-y-1">
                <ul className="flex items-center gap-3 text-xs text-coklat-1">
                  <li>category </li>
                  <li>category </li>
                </ul>
                <p className="text-lg font-semibold text-army-1">
                  {faker.lorem.words()}
                </p>
              </div>
              <small className="line-clamp-3 text-army-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis pariatur laudantium accusantium molestias, adipisci
                reprehenderit, alias doloribus, odio consequatur maxime aperiam
                quas omnis neque blanditiis harum doloremque. Sunt, doloremque
                maiores?
              </small>
              <div className="flex items-center justify-between">
                <div className="flex gap-8">
                  <ul className="flex gap-3 divide-x divide-army-2 text-sm">
                    <li>
                      <p className="text-army-2">Admin </p>
                    </li>
                    <li>
                      <p className="px-2 text-army-2">22 Oktober 2024 </p>
                    </li>
                  </ul>
                </div>
                <button className="text-sm text-army-1">Rad more</button>
              </div>
            </div>
          </article>
          <article className="flex gap-4">
            <picture>
              <img
                src={faker.image.urlLoremFlickr()}
                alt=""
                className="aspect-auto w-32 shrink-0 bg-cover"
              />
            </picture>
            <div className="flex-1 space-y-3">
              <div className="space-y-1">
                <ul className="flex items-center gap-3 text-xs text-coklat-1">
                  <li>category </li>
                  <li>category </li>
                </ul>
                <p className="text-lg font-semibold text-army-1">
                  {faker.lorem.words()}
                </p>
              </div>
              <small className="line-clamp-3 text-army-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis pariatur laudantium accusantium molestias, adipisci
                reprehenderit, alias doloribus, odio consequatur maxime aperiam
                quas omnis neque blanditiis harum doloremque. Sunt, doloremque
                maiores?
              </small>
              <div className="flex items-center justify-between">
                <div className="flex gap-8">
                  <ul className="flex gap-3 divide-x divide-army-2 text-sm">
                    <li>
                      <p className="text-army-2">Admin </p>
                    </li>
                    <li>
                      <p className="px-2 text-army-2">22 Oktober 2024 </p>
                    </li>
                  </ul>
                </div>
                <button className="text-sm text-army-1">Rad more</button>
              </div>
            </div>
          </article>
          <article className="flex gap-4">
            <picture>
              <img
                src={faker.image.urlLoremFlickr()}
                alt=""
                className="aspect-auto w-32 shrink-0 bg-cover"
              />
            </picture>
            <div className="flex-1 space-y-3">
              <div className="space-y-1">
                <ul className="flex items-center gap-3 text-xs text-coklat-1">
                  <li>category </li>
                  <li>category </li>
                </ul>
                <p className="text-lg font-semibold text-army-1">
                  {faker.lorem.words()}
                </p>
              </div>
              <small className="line-clamp-3 text-army-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis pariatur laudantium accusantium molestias, adipisci
                reprehenderit, alias doloribus, odio consequatur maxime aperiam
                quas omnis neque blanditiis harum doloremque. Sunt, doloremque
                maiores?
              </small>
              <div className="flex items-center justify-between">
                <div className="flex gap-8">
                  <ul className="flex gap-3 divide-x divide-army-2 text-sm">
                    <li>
                      <p className="text-army-2">Admin </p>
                    </li>
                    <li>
                      <p className="px-2 text-army-2">22 Oktober 2024 </p>
                    </li>
                  </ul>
                </div>
                <button className="text-sm text-army-1">Rad more</button>
              </div>
            </div>
          </article>

          <div className="flex items-center justify-center gap-3">
            <ul className="flex items-center gap-3">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
