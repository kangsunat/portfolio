import PortfolioAsside from "@/components/organisms/portfolio-asside";
import React, { ReactNode } from "react";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container flex flex-col gap-8 p-8 lg:flex-row">
      {/* asside */}
      <PortfolioAsside />

      {/* content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
