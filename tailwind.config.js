/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-131":
          "linear-gradient(131deg, #1B78DE, #0F4279 10%, #0F4279, #0F4279, #0F4279, #0F4279, #1B78DE)",

        // Add more gradients as needed
      },
      colors: {
        "primary-text": "#81AFDD",
        totalBg: "#040C18",
      },
    },
  },
  plugins: [],
};
