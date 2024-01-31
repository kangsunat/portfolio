import "../styles/globals.css";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-tooltip/dist/react-tooltip.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/mollecules/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Poppins({
  weight: ["700", "400", "300", "100"],
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  title: "Ahmad Nasirin",
  description: "ahmad nasirin portofolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
