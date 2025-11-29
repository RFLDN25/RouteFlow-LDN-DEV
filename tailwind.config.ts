import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0B1021",
        navy: "#111827",
        sky: "#4F46E5",
        mint: "#22D3EE",
        sand: "#F3F4F6"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.1)",
        floating: "0 20px 60px rgba(17,24,39,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
