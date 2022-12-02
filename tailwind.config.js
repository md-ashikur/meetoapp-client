/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4e5d78",
          secondary: "#057aff",
          accent: "#f6f7f8",
          neutral: "#f0f6ff",
          "base-100": "#ffffff",
        },
      },
      "dark",
     
    ],
  },
  plugins: [require("daisyui")],
}
