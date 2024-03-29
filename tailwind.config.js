const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        creamy: "#F2F2F2",
        accent: "#CBEE4C",
        chip: "#303030",
        obsi: "#191A1D",
        secondary: "#ADADAD",
        muted: "#717173",
        light: "rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
