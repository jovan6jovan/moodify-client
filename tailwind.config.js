/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-+/, // 👈  In order to successfully edit the background color of the mood
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
