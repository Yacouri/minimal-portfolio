/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CBEE4C",
        secondary: "#191D23",
        muted: "#61727E",
        body: "#0F1319",
      },
    },
  },
  plugins: [],
};
