/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        title: ["1.5rem"],
        description: ["1rem"],
      },
    },
  },
  plugins: [],
};

export default config;
// module.exports = config;
