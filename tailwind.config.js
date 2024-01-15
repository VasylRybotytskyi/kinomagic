/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2DBD52",
        secondary: "#B13000",
        whiteColor: "#ffffff", // ваш власний колір
      },
    },
  },
  plugins: [],
};
