"use client";

import HeroBtn from "@/components/atoms/hero/button";
import HeroCard from "@/components/atoms/hero/card";
import React, { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import swcore from "swiper/core";
import { Autoplay, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroRight() {
  const [sw, setSw] = useState<swcore>();

  return (
    <div className="h-full bg-transparent">
      <div className="flex h-full items-center justify-between gap-3">
        <HeroBtn
          className="hidden md:block md:-translate-x-5"
          icon={
            <i className="text-xl ">
              <GrFormPreviousLink />
            </i>
          }
          onClick={() => sw?.slidePrev()}
        />
        <Swiper
          grabCursor={true}
          onSwiper={setSw}
          loop={true}
          autoplay={{ delay: 2500 }}
          modules={[Autoplay]}
          spaceBetween={30}
        >
          <SwiperSlide>
            <HeroCard
              image="https://picsum.photos/200"
              thechnology={["javascript", "nextjs", "react"]}
              title="Aplikasi 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HeroCard
              image="https://picsum.photos/200"
              thechnology={["php", "laravel"]}
              title="Aplikasi 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HeroCard
              image="https://picsum.photos/200"
              thechnology={["php", "wordpress", "nextjs", "javascript"]}
              title="Aplikasi 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HeroCard
              image="https://picsum.photos/200"
              thechnology={["express", "nextjs"]}
              title="Aplikasi 4"
            />
          </SwiperSlide>
        </Swiper>
        <HeroBtn
          className="hidden md:block md:translate-x-5"
          icon={
            <i className="text-xl">
              <GrFormNextLink />
            </i>
          }
          onClick={() => sw?.slidePrev()}
        />
      </div>
    </div>
  );
}
