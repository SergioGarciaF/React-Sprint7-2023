/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        starwars: {

          "primary": "#f5f5f4",

          "secondary": "#f5f5f4",

          "accent": "#f5f5f4",

          "neutral": "#e7e5e4",

          "base-100": "#d6d3d1",

          "info": "#a8a29e",

          "success": "#44403c",

          "warning": "#1c1917",

          "error": "#facc15",
        },
      },
    ],
  }

}

