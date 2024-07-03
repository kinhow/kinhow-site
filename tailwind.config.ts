import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "var(--gray)",
        teal: "var(--teal)",
        border: "var(--border)",
        primary: "var(--primary)",
        background: "var(--background)",
        "muted-primary": "var(--muted-primary)",
        "secondary-background": "var(--secondary-background)",
        "muted-foreground": "var(--muted-foreground)",
      }
    },
  },
  plugins: [],
};

export default config;
