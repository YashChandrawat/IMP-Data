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
        "custom-bg":
          "linear-gradient(90deg, #FFE3EC 0%, rgba(118, 208, 254, 1) 52.5%, #96ACFF 100%)",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        gradient: `
          0 4px 6px rgba(255, 227, 236, 0.3),
          0 8px 10px rgba(118, 208, 254, 0.5),
          0 12px 20px rgba(150, 172, 255, 0.5)
        `,
      },
    },
  },
  plugins: [],
};
