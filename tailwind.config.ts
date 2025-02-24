import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        liver: "#5C4033",
        champagne: "#F5E6CC",
        darkSlateGray: "#2F4F4F",
        tan: "#C5A880",
        oldRose: "#C78283",
      },
    },
  },
  plugins: [],
} satisfies Config;
