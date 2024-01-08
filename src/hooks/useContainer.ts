"use client";

import { useEffect, useState } from "react";

export default function useContainer() {
  const [screen, setScreen] = useState<number>(0);

  useEffect(() => {
    setScreen(window.innerWidth);
    window.addEventListener("resize", () => setScreen(window.innerWidth));
    return () => window.removeEventListener("resize", () => {});
  }, []);

  return screen >= 1440
    ? "desktop"
    : screen >= 1020
      ? "laptop"
      : screen >= 768
        ? "tablet"
        : "mobile";
}
