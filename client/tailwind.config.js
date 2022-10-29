/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#dc2626",
          
          "secondary": "#7f1d1d",
                   
          "accent": "#fbbf24",
                   
          "neutral": "#fef9c3",
                   
          "base-100": "#FCFBFD",
                   
          "info": "#9FCAEF",
                   
          "success": "#128756",
                   
          "warning": "#D59515",
                   
          "error": "#dc2626",

          "base-100": "#ffffff",
        },
      },
      "dark",
      "aqua",
    ],
  },
}