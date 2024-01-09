"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swCore from "swiper";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import cn from "classnames";

type TestimoniSwiper = {
  testimonies: {
    logo: string;
    message: string;
    avatar: string;
    name: string;
    jobPosition: string;
  }[];
};

export default function TestimoniSwiper({ testimonies }: TestimoniSwiper) {
  const [core, setCore] = useState<swCore>();
  const [slideIndex, setSlideIndex] = useState<number>(0);
  return (
    <div className="relative">
      <button
        className="text-coklat-1 absolute left-0 top-1/2 hidden rounded-full border border-[#bc6c25] p-2 md:block"
        onClick={() => core?.slidePrev()}
      >
        <i className="text-xl">
          <AiOutlineArrowLeft />
        </i>
      </button>
      <div className="space-y-10 md:px-12">
        <Swiper
          onSwiper={setCore}
          onSlideChange={(s) => setSlideIndex(s.realIndex)}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
          }}
        >
          {testimonies.map((v, i) => (
            <SwiperSlide
              key={i}
              className="flex flex-col items-center justify-between gap-3"
            >
              <picture>
                <img
                  src={v.logo}
                  alt={v.name}
                  className="aspect-auto max-w-[90px]"
                />
              </picture>
              <p className="text-army-2 text-center text-sm font-semibold">
                &quot; {v.message} &quot;
              </p>
              <picture>
                <img
                  src={v.avatar}
                  alt={v.name}
                  className="aspect-square w-10 rounded-full"
                />
              </picture>
              <div className="text-army-1 flex flex-col items-center">
                <small className="font-medium">{v.name}</small>

                <small>{v.jobPosition}</small>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center gap-1">
          {testimonies.map((v, i) => (
            <div
              className={cn(
                "rounded-full p-[4px]",
                i == slideIndex ? "bg-coklat-1" : "bg-coklat-2",
              )}
              key={i}
            />
          ))}
        </div>
      </div>
      <button
        className="text-coklat-1 absolute right-0 top-1/2 hidden rounded-full border border-[#bc6c25] p-2 md:block"
        onClick={() => core?.slideNext()}
      >
        <i>
          <AiOutlineArrowRight />
        </i>
      </button>
    </div>
  );
}
