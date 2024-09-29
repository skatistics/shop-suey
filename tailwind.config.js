/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        "ct-F2F7F2": "#F2F7F2",
        "ct-D9E8D9": "#D9E8D9",
        "ct-C0D8C0": "#C0D8C0",
        "ct-A6C9A7": "#A6C9A7",
        "ct-8DB98E": "#8DB98E",
        "ct-base-67A770": "#67A770",
        "ct-5D985E": "#5D985E",
        "ct-4E7E4E": "#4E7E4E",
        "ct-3E653F": "#3E653F",
        "ct-2F4C2F": "#2F4C2F",
        "ct-1F331F": "#1F331F",
        "ct-191819": "#191819",
        "ct-080D08": "#080D08",
      },
      fontFamily: {
        "ct-Teko": ["Teko", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(31 29 29) white",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#555",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
