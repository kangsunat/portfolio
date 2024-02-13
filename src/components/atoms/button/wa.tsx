"use client";

import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function WA() {
  return (
    <button
      className="hover fixed bottom-5 right-5 rounded-full bg-green-500 p-2 text-4xl text-white transition-all duration-300 hover:scale-105"
      onClick={() => {
        //wa.me/1XXXXXXXXXX?text=I'm%20interested%20in%20your%20car%20for%20sale
        window.open(
          `https://wa.me/6282223839318?text=${encodeURIComponent(
            "Halo, saya ingin mendapatkan penawaran untuk pembuatan situs web untuk bisnis saya. Bisakah Anda membantu?",
          )}`,
        );
      }}
    >
      <IoLogoWhatsapp />
    </button>
  );
}
