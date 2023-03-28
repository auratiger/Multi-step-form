const colors = {
  "primary-marine": "hsl(213, 96%, 18%)",
  "primary-marine-hover": "hsl(213, 96%, 18%, 0.9)",
  "primary-marine-disabled": "hsl(213, 96%, 18%, 0.4)",
  "primary-purple": "hsl(243, 100%, 62%)",
  "primary-pastel": "hsl(228, 100%, 84%)",
  "primary-light": "hsl(206, 94%, 87%)",
  "secondary-strawberry": "hsl(354, 84%, 57%)",
  "secondary-cool": "hsl(231, 11%, 63%)",
  "secondary-light": "hsl(229, 24%, 87%)",
  "secondary-magnolia": "hsl(217, 100%, 97%)",
  "secondary-alabaster": "hsl(231, 100%, 99%)",
  "secondary-white": "hsl(0, 0%, 100%)",
};

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
      },

      backgroundColor: colors,
      textColor: colors,
      borderColor: colors,
      colors: colors,
      backgroundImage: {
        sidebar: "url('../public/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
