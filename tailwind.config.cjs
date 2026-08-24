/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)"
      },

      colors: {
        blue: "#273E79",
        red: "#bd3a4e",
        lightGrey: "#f5f5f5",
        dark: "#2f333a",
        cyan: "#3a9ebd"
      },

      fontSize: {
        "fs-xxl": "var(--fs-xxl)",
        "fs-xl": "var(--fs-xl)",
        "fs-xl-l": "var(--fs-xl-l)",
        "fs-l": "var(--fs-l)",
        "fs-l-s": "var(--fs-l-s)",
        "fs-m": "var(--fs-m)",
        "fs-s": "var(--fs-s)",
        "fs-xs": "var(--fs-xs)"
      },

      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        "card-hover-strong": "var(--shadow-card-hover-strong)",
        "button-hover": "var(--shadow-button-hover)",
        "button-active": "var(--shadow-button-active)",
        nav: "var(--shadow-nav)"
      },

      transitionTimingFunction: {
        smooth: "var(--ease-smooth)",
        pop: "var(--ease-pop)"
      },

      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)"
      },

      zIndex: {
        overlay: "var(--z-overlay)",
        content: "var(--z-content)",
        dropdown: "var(--z-dropdown)",
        navbar: "var(--z-navbar)",
        loading: "var(--z-loading)"
      },

      spacing: {
        "padding-y": "var(--padding-y)"
      }
    }
  },
  plugins: []
};
