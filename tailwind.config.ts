import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712", 
        glass: "rgba(255, 255, 255, 0.03)",
        accent: {
          blue: "#3b82f6",
          purple: "#a855f7",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'premium-gradient': 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
      },
    },
  },
  plugins: [],
};
export default config;