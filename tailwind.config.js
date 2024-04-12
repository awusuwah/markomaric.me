/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts}", "./storybook/**/*.ts"],
  theme: {
    extend: {
      colors: {
        bgr: {
          DEFAULT: "#011627",
          lighter: "#02223C",
          darker: "#010B14",
        },
        txt: {
          DEFAULT: "#FDFFFC",
          lighter: "#FFFFFF",
          darker: "#FDFFFC",
        },
        pri: {
          DEFAULT: "#CE2D4F",
          hover: "#C92C4E",
          active: "#B82848",
          contrast: "#FDFFFC",
        },
        sec: {
          DEFAULT: "#4281A4",
          hover: "#407FA0",
          active: "#3A7392",
          contrast: "#FDFFFC",
        },
      },
    },
  },
  plugins: [],
};
