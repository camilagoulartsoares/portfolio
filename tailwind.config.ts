import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#07070B", ivory: "#F2F0EC", acid: "#D6FF63", lilac: "#B69AFF", sky: "#8BE9EE" },
      fontFamily: { display: ["var(--font-syne)", "sans-serif"], sans: ["var(--font-space)", "sans-serif"], mono: ["var(--font-ibm)", "monospace"] }
    }
  },
  plugins: []
};
export default config;
