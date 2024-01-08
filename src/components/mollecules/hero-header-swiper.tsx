"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swCore from "swiper";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import cn from "classnames";

type HeroHeaderSwiper = {
  slide: {
    image: string;
    name: string;
    description: string;
  }[];
};

export default function HeroHeaderSwiper({ slide }: HeroHeaderSwiper) {
  const [core, setCore] = useState<swCore>();
  const [slideIndex, setSlideIndex] = useState<number>(0);

  return (
    <div className="flex h-full w-full select-none flex-col justify-between overflow-hidden bg-neutral-100">
      <div>
        <Swiper
          onSwiper={setCore}
          loop={true}
          onSlideChange={(s) => setSlideIndex(s.realIndex)}
        >
          {slide.map((v, i) => (
            <SwiperSlide key={i}>
              <picture>
                <img
                  src={v.image}
                  alt={v.name}
                  className="aspect-video w-[550px] object-cover "
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col justify-between gap-4 p-4">
        <div>
          <p className="font-semibold">{slide[slideIndex].name}</p>
          <small>{slide[slideIndex].description}</small>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {slide.map((v, i) => (
              <div
                className={cn(
                  "rounded-full bg-neutral-600 p-1",
                  slideIndex == i ? "bg-neutral-700" : "bg-neutral-500",
                )}
                key={i}
              ></div>
            ))}
          </div>
          <div className="space-x-3">
            <button
              className="rounded-full border border-neutral-500 p-1"
              onClick={() => core?.slidePrev()}
            >
              <i>
                <FiArrowLeft />
              </i>
            </button>
            <button
              className="rounded-full border border-neutral-500 p-1"
              onClick={() => core?.slideNext()}
            >
              <i>
                <FiArrowRight />
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
