/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1B3C67",
        secondary: "#FE7A36",
      },
    },
  },
  plugins: [require("daisyui")],
};
