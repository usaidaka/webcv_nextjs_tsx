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
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "4xl":
          "-10px -10px 30px 4px rgba(0,0,0,0.1), 10px 10px 30px 4px rgba(45,78,255,0.15)",
        "5xl":
          "5px 5px rgba(33, 150, 243,0.4), 10px 10px rgba(33, 150, 243,0.3), 15px 15px rgba(33, 150, 243,0.2), 20px 20px rgba(33, 150, 243,0.1), 25px 25px rgba(33, 150, 243,0.05)",
        "6xl": "rgba(33, 150, 243, 0.5) 0px 0px 16px",
      },
      fontFamily: {
        bebas: "Bebas Neue",
        dm: "DM Sans",
      },
      backgroundColor: {
        cover:
          "linear-gradient(180deg, rgba(100,181,246,1) 0%, rgba(236,240,252,1) 30%, rgba(236,240,252,1) 60%, rgba(100,181,246,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
