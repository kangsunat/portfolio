"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swCore from "swiper";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

export default function TestimoniSwiper() {
  const [core, setCore] = useState<swCore>();

  return (
    <div className="flex flex-col gap-3 space-y-10">
      <div>
        <Swiper
          onSwiper={setCore}
          slidesPerView={2}
          spaceBetween={30}
          //   breakpoints={}
        >
          <SwiperSlide className="flex flex-col gap-3 space-y-3">
            <div className="flex items-center gap-1 text-yellow-700">
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaRegStarHalfStroke />
              </i>
            </div>
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              eligendi optio molestiae, ea quibusdam tempore consequuntur neque
              similique assumenda quisquam alias sed accusantium dicta iste qui
              tenetur repellendus odio reiciendis!
            </p>
            <div className="grid grid-cols-2 divide-x divide-slate-500">
              <div className="flex items-center gap-2">
                <picture>
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="aspect-square w-10 rounded-full"
                  />
                </picture>
                <div className="flex flex-col">
                  <small className="text-sm font-medium">Fullname</small>
                  <small className="font-light">Position job</small>
                </div>
              </div>
              <div className="px-4">
                <picture>
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="aspect-video w-20"
                  />
                </picture>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* pagination and navigation */}
      <div className="flex items-center justify-between">
        <div>pagination</div>
        <div>navigation</div>
      </div>
    </div>
  );
}
