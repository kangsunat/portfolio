/**
 * ?color pallet :
 * https://www.realtimecolors.com/?colors=170519-fef9fe-cd41d5-e4df82-88db5a&fonts=Poppins-Poppins
 */
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
        text: {
          50: "#f9eafb",
          100: "#f3d4f7",
          200: "#e7aaee",
          300: "#dc7fe6",
          400: "#d055dd",
          500: "#c42ad5",
          600: "#9d22aa",
          700: "#761980",
          800: "#4e1155",
          900: "#27082b",
          950: "#140415",
        },
        main: {
          50: "#fbe9fb",
          100: "#f8d3f8",
          200: "#f0a8f0",
          300: "#e97ce9",
          400: "#e151e1",
          500: "#da25da",
          600: "#ae1eae",
          700: "#831683",
          800: "#570f57",
          900: "#2c072c",
          950: "#160416",
        },
        primary: {
          50: "#faeafa",
          100: "#f4d5f6",
          200: "#e9abed",
          300: "#df82e3",
          400: "#d458da",
          500: "#c92ed1",
          600: "#a125a7",
          700: "#791c7d",
          800: "#501254",
          900: "#28092a",
          950: "#140515",
        },
        secondary: {
          50: "#fafaea",
          100: "#f6f4d5",
          200: "#ede9ab",
          300: "#e3df82",
          400: "#dad458",
          500: "#d1c92e",
          600: "#a7a125",
          700: "#7d791c",
          800: "#545012",
          900: "#2a2809",
          950: "#151405",
        },
        accent: {
          50: "#f0faea",
          100: "#e1f6d5",
          200: "#c2edab",
          300: "#a4e382",
          400: "#85da58",
          500: "#67d12e",
          600: "#52a725",
          700: "#3e7d1c",
          800: "#295412",
          900: "#152a09",
          950: "#0a1505",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
