/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        doto: ["Doto", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        pressStart2P: ["Press Start 2P", "sans-serif"],
        spaceMono: ["Space Mono", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(-28deg, #f87f73 0%, #f87f73 60%, #ffffff 60%, #ffffff 100%)",
        "custom-Yellow": "rgba(252, 189, 2, 0.31)",
      },
    },
  },
  plugins: [],
};
