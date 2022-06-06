module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: [""],
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#037C66",
          "primary-focus": "#03705C",
          "primary-content": "#FFFFFF",
          secondary: "#E0649E",
          "secondary-focus": "#D75592",
          "secondary-content": "#FFFFFF",
          accent: "#E09F6D",
          "accent-focus": "#DA9560",
          "accent-content": "#FFFFFF",
          neutral: "#191D24",
          "neutral-focus": "#15181E",
          "neutral-content": "#A6ADBA",
          "base-100": "#2B313B",
          "base-200": "#242933",
          "base-300": "#191D24",
          "base-content": "#A6ADBA",
          info: "#99D2E6",
          "info-content": "#002B3D",
          error: "#F87272",
          "error-content": "#470000",
          success: "#78E8B4",
          "success-content": "#003320",
          warning: "#FBBD23",
          "warning-content": "#382800",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
