/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('/src/images/img1.svg')",
        bg2: "url('/src/images/bg2.svg')",
      },
    },
  },
  plugins: [],
};
