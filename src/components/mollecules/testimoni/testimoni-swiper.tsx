"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import core from "swiper/core";
import Card from "@/components/atoms/testimoni/card";
import { Autoplay } from "swiper/modules";
import { tTestimoniSwiper } from "@/types/testimoni";

export default function TestimoniSwiper({ card }: tTestimoniSwiper) {
  const [sw, setSw] = useState<core>();
  return (
    <div>
      <Swiper
        onSwiper={setSw}
        spaceBetween={30}
        breakpoints={{ 760: { slidesPerView: 3 }, 425: { slidesPerView: 2 } }}
        loop
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
      >
        {card.map((v, i) => (
          <SwiperSlide key={i}>
            <Card {...v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
