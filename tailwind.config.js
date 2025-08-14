/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F6F6F6",
          200: "#EEEEEE",
          230: "#E3E3E3",
          300: "#CCCCCC",
          400: "#999999",
          500: "#555555",
          600: "#4A4A4A",
          608: "#484848",
          700: "#3A3A3A",
          800: "#2B2B2B",
          900: "#181818",
          headerLogo: "#4A494F",
          headerBorder: "#EDEDED",
          dropdownBorder: "#B6B6B6",
        },
        purple: {
          100: "#F8F0FF",
          200: "#ECD9FF",
          300: "#DCB9FF",
          400: "#C894FD",
          500: "#AB57FF",
          600: "#9935FF",
          700: "#861DEE",
          800: "#6E0AD1",
          900: "#5603A7",
        },
        beige: {
          100: "#FFF0D6",
          200: "#FFE2AD",
          300: "#FFC583",
          400: "#FFAE65",
          500: "#FF8832",
        },
        blue: {
          100: "#E2F5FF",
          200: "#B1E4FF",
          300: "#7CD2FF",
          400: "#34B9FF",
          500: "#00A2FE",
        },
        green: {
          100: "#E4FBDC",
          200: "#D0F5C3",
          300: "#9BE282",
          400: "#60CF37",
          500: "#2BA600",
        },
        error: "#DC3A3A",
        surface: "#F6F8FF",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontSize: {
        12: ["0.75rem", { lineHeight: "1.5", letterSpacing: "-0.005em" }], // -0.5%
        14: ["0.875rem", { lineHeight: "1.43", letterSpacing: "-0.005em" }],
        15: ["0.9375rem", { lineHeight: "1.43", letterSpacing: "-0.01em" }], // -1%
        16: ["1rem", { lineHeight: "1.6", letterSpacing: "-0.01em" }],
        18: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        20: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        24: ["1.5rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        28: ["1.75rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
      },
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "purple-600": "inset 0 0 0 1px #9935FF",
        "purple-600-2": "inset 0 0 0 2px #9935FF",
        "purple-700": "inset 0 0 0 1px #861DEE",
        "purple-800": "inset 0 0 0 1px #6E0AD1",
        "purple-900": "inset 0 0 0 1px #5603a7",
        "purple-900-2": "inset 0 0 0 2px #5603a7",
        "gray-300": "inset 0 0 0 1px #CCCCCC",
        "gray-500": "inset 0 0 0 1px #555555",
        "gray-700": "inset 0 0 0 1px #3A3A3A",
        "gray-800": "inset 0 0 0 1px #2B2B2B",
      },
      dropShadow: {
        dropdownBorder: "0 2px 12px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      keyframes: {
        "skeleton-shimmer": {
          "0%": { backgroundPosition: "-400% 0" },
          "100%": { backgroundPosition: "400% 0" },
        },
      },
      animation: {
        "skeleton-shimmer": "skeleton-shimmer 15s linear infinite",
      },
      screens: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1200px",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["focus"],
    },
  },
};
