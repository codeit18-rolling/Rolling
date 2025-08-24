/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          230: "var(--gray-230)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          550: "var(--gray-550)",
          600: "var(--gray-600)",
          608: "var(--gray-608)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
          headerLogo: "var(--gray-headerLogo)",
          headerBorder: "var(--gray-headerBorder)",
          dropdownBorder: "var(--gray-dropdownBorder)",
        },
        purple: {
          100: "var(--purple-100)",
          200: "var(--purple-200)",
          300: "var(--purple-300)",
          400: "var(--purple-400)",
          500: "var(--purple-500)",
          600: "var(--purple-600)",
          700: "var(--purple-700)",
          800: "var(--purple-800)",
          900: "var(--purple-900)",
        },
        beige: {
          100: "var(--beige-100)",
          200: "var(--beige-200)",
          300: "var(--beige-300)",
          400: "var(--beige-400)",
          500: "var(--beige-500)",
        },
        blue: {
          100: "var(--blue-100)",
          200: "var(--blue-200)",
          300: "var(--blue-300)",
          400: "var(--blue-400)",
          500: "var(--blue-500)",
        },
        green: {
          100: "var(--green-100)",
          200: "var(--green-200)",
          300: "var(--green-300)",
          400: "var(--green-400)",
          500: "var(--green-500)",
        },
        error: "var(--error)",
        surface: "var(--surface)",
        white: "var(--white)",
        black: "var(--black)",
        "white-opacity-5": "var(--white-opacity-5)",
        "black-opacity-1": "var(--black-opacity-1)",
        "black-opacity-2": "var(--black-opacity-2)",
        "black-opacity-3": "var(--black-opacity-3)",
        "black-opacity-4": "var(--black-opacity-4)",
        "black-opacity-5": "var(--black-opacity-5)",
        "black-opacity-6": "var(--black-opacity-6)",
        "black-opacity-7": "var(--black-opacity-7)",
        "black-opacity-8": "var(--black-opacity-8)",
        "black-opacity-08": "var(--black-opacity-08)",
        "dimmed-opacity": "var(--dimmed-opacity)",
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
        sans: ["Pretendard", "Poppins", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "purple-600": "inset 0 0 0 1px var(--purple-600)",
        "purple-600-2": "inset 0 0 0 2px var(--purple-600)",
        "purple-700": "inset 0 0 0 1px var(--purple-700)",
        "purple-800": "inset 0 0 0 1px var(--purple-800)",
        "purple-900": "inset 0 0 0 1px var(--purple-900)",
        "purple-900-2": "inset 0 0 0 2px var(--purple-900)",
        "gray-300": "inset 0 0 0 1px var(--gray-300)",
        "gray-500": "inset 0 0 0 1px var(--gray-500)",
        "gray-700": "inset 0 0 0 1px var(--gray-700)",
        "gray-800": "inset 0 0 0 1px var(--gray-800)",
        "loading-spinner":
          "-24px 0 var(--purple-100), 24px 0 var(--purple-100)",
        "black-opacity": "0 2px 12px var(--black-opacity-08)",
      },
      dropShadow: {
        dropdownBorder: "0 2px 12px var(--black-opacity-08)",
      },

      keyframes: {
        "skeleton-shimmer": {
          "0%": { backgroundPosition: "-400% 0" },
          "100%": { backgroundPosition: "400% 0" },
        },
        "loading-spinner": {
          "33%": {
            background: "var(--purple-100)",
            "box-shadow": "-12px 0 var(--purple-800), 12px 0 var(--purple-100)",
          },
          "66%": {
            background: "var(--purple-800)",
            "box-shadow": "-12px 0 var(--purple-100), 12px 0 var(--purple-100)",
          },
          "100%": {
            background: "var(--purple-100)",
            "box-shadow": "-12px 0 var(--purple-100), 12px 0 var(--purple-800)",
          },
        },
      },
      animation: {
        "skeleton-shimmer": "skeleton-shimmer 15s linear infinite",
        "loading-spinner": "loading-spinner 3s linear infinite alternate",
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
