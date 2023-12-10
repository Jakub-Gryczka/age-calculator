/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/*.{html,js}"],
  theme: {
    colors: {
      "purple-primary": "hsl(259, 100%, 65%)",
      "light-red": "hsl(0, 100%, 67%)",
      neutral: {
        white: "hsl(0, 0%, 100%)",
        "off-white": "hsl(0, 0%, 94%)",
        "light-grey": "hsl(0, 0%, 86%)",
        "smokey-grey": "hsl(0, 1%, 44%)",
        "off-black": "hsl(0, 0%, 8%)",
      },
    },
    letterSpacing: {
      normal: "0",
      wider: "0.2em",
      widest: "0.3em",
    },
    extend: {
      fontFamily: {
        'pop': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};
