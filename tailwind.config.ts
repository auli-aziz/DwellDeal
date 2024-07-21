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
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        averia: ["var(--font-averia)"],
        shanti: ["var(--font-shanti)"],
      },
      colors: {
        primary: "#9E896A",
        secondary: "#C7B198",
        tertiary: "#DFD3C3",
        neutral: "#F0ECE3"
      },
    },
  },
  plugins: [],
};

export default config;
