export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
      animation: {
        "gradient-bg": "gradient 10s ease infinite",
      },
      backgroundSize: {
        300: "300% 300%",
      },
    },
  },
  plugins: [],
};
