import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class", // <- adicione isso
  theme: {
    extend: {},
  },
  plugins: [
    daisyui({
      themes: ["light", "dark"], // temas disponíveis
    }),
  ],
};

export default config;