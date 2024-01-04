import PortfolioAsside from "@/components/organisms/portfolio-asside";
import React, { ReactNode } from "react";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container flex gap-3 p-8">
      {/* asside */}
      <PortfolioAsside />

      {/* content */}
      <main className="flex-1 rounded-lg border border-cyan-500 p-4">
        {children}
      </main>
    </div>
  );
}
