import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
      },
      colors: {
        primary: "#fefae0",
        coklat: {
          1: "#bc6c25",
          2: "#dda15e",
        },
        army: {
          1: "#283618",
          2: "#606c38",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
