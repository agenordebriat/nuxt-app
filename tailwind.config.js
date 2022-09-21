/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./formkit.config.js"],
  theme: {
    extend: {},
  },
  plugins: [require("@formkit/themes/tailwindcss"), require("@tailwindcss/line-clamp")],
};
