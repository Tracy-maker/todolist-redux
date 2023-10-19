/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        4: "1rem", // Set your desired padding value
      },
      width: {
        auto: "auto", // Set to 'auto' to eliminate the width value
      },
    },
  },
  plugins: [require("daisyui")],
};
