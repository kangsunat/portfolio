/**
 * ?color pallet :
 * https://www.realtimecolors.com/?colors=06010b-fcfaff-8521f1-f778c3-f33f69&fonts=Poppins-Poppins
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
          50: "#f2e8fd",
          100: "#e5d0fb",
          200: "#cca2f6",
          300: "#b273f2",
          400: "#9944ee",
          500: "#7f16e9",
          600: "#6611bb",
          700: "#4c0d8c",
          800: "#33095d",
          900: "#19042f",
          950: "#0d0217",
        },
        main: {
          50: "#f0e5ff",
          100: "#e0ccff",
          200: "#c299ff",
          300: "#a366ff",
          400: "#8533ff",
          500: "#6600ff",
          600: "#5200cc",
          700: "#3d0099",
          800: "#290066",
          900: "#140033",
          950: "#0a001a",
        },
        primary: {
          50: "#f2e7fd",
          100: "#e5cffc",
          200: "#cb9ff9",
          300: "#b06ff6",
          400: "#963ff3",
          500: "#7c0ff0",
          600: "#630cc0",
          700: "#4a0990",
          800: "#320660",
          900: "#190330",
          950: "#0c0218",
        },
        secondary: {
          50: "#fee7f4",
          100: "#fccfe9",
          200: "#f99fd4",
          300: "#f76ebe",
          400: "#f43ea8",
          500: "#f10e92",
          600: "#c10b75",
          700: "#910858",
          800: "#60063b",
          900: "#30031d",
          950: "#18010f",
        },
        accent: {
          50: "#fde7ec",
          100: "#fccfda",
          200: "#f99fb4",
          300: "#f66f8f",
          400: "#f33f69",
          500: "#f00f44",
          600: "#c00c36",
          700: "#900929",
          800: "#60061b",
          900: "#30030e",
          950: "#180207",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
