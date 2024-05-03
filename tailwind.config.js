/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //purple
        primary: "#9966C9",
        primaryLight: "#E8DDF3",
        primaryLightBorder: "#C0A1DE",
        primaryHover: "#733aaa",
        primaryHeaderBg: "#9268C414",
        primaryDark: "#462466",
        primaryActive: "#E8DDF3",
        primaryActiveBorder: "#BDA3DB66",

        //orange
        secondary: "#F3B87A",
        secondaryLight: "#FEFAF6",
        secondaryLightBorder: "#F0EFEA",
        secondaryHover: "#d17410",
        secondaryDark: "#EC9131",
        secondaryDarkBorder: "#E17D14",

        green: "#84BD9E",
        greenBorder: "#2EDB6B",
        greenlight: "#84BD9E",
        greenLightBg: "#EAFBF1",
        greenHeaderBg: "#D2F4D966",
        greenDark: "#37674D",
        greenDarkBorder: "#1B9C49",
        greenTagBg: "#B9F3CE",

        greyish: "#F0EFEA",
      },
    },
  },
  plugins: [],
};
