const fsLight = {
  primary: "#037C66",
  "primary-focus": "#03705C",
  "primary-content": "#FFFFFF",
  secondary: "#E0649E",
  "secondary-focus": "#D75592",
  "secondary-content": "#FFFFFF",
  accent: "#E09F6D",
  "accent-focus": "#DA9560",
  "accent-content": "#FFFFFF",
  neutral: "#3d4451",
  "neutral-content": "#ffffff",
  "base-100": "#ffffff",
  "base-200": "#F2F2F2",
  "base-300": "#E5E6E6",
  "base-content": "#1f2937",
  info: "#99D2E6",
  "info-content": "#002B3D",
  error: "#F87272",
  "error-content": "#470000",
  success: "#78E8B4",
  "success-content": "#003320",
  warning: "#FBBD23",
  "warning-content": "#382800",
};

const fsDark = {
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
};

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: [""],
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        fsLight: { ...fsLight },
        fsDark: { ...fsDark },
      },
    ],
    darkTheme: false,
  },
};
