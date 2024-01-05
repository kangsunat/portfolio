"use client";

import React from "react";
import InputSearch from "../atoms/input-search";
import AsideMenu from "../atoms/aside-menu";

export default function PortfolioAsside() {
  return (
    <aside className="shrink-0 lg:w-[20vw]">
      <div className="sticky top-10 space-y-3 rounded-lg border border-cyan-500 p-3">
        {/* md */}
        <div className=" hidden lg:block">
          <div className="flex items-center justify-between">
            <p>Find your app</p>
            <button className="text-sm">Reset</button>
          </div>
          <InputSearch placeholder="search" />
          {/* category sistem */}
          <AsideMenu
            title="Sistem"
            items={[
              "Sistem Informasi Manajemen (SIM)",
              "Sistem Informasi Keputusan (SIK)",
              "Sistem Pendukung Keputusan (SPK)",
              "Sistem Informasi Eksekutif (SIE)",
              "Sistem Informasi Transaksional (SIT)",
              "Sistem Informasi Akuntansi (SIA)",
              "Sistem Informasi Taktikal (SITa)",
              "Sistem Informasi Strategis (SIS)",
              "Sistem Informasi Produksi (SIP)",
              "Sistem Informasi Pemasaran (SIPm)",
              "Sistem Informasi Sumber Daya Manusia (SISDM)",
              "Sistem Informasi Internal",
              "Sistem Informasi Eksternal",
              "Sistem Informasi Berbasis Real-time",
            ]}
          />
          <AsideMenu
            title="Device"
            items={["All App", "Desktop App", "Website App", "Mobile App"]}
          />
          <AsideMenu
            title="Build with"
            items={[
              "Nextjs",
              "ReactJs",
              "Laravel",
              "PHP Vanila",
              "Javascript Vanila",
            ]}
          />
        </div>

        {/* mobile */}
        <div className="lg:hidden">filter hereeeeee</div>
      </div>
    </aside>
  );
}
