/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

const getRandomBox = (arr) => {
  if (arr.length === 0) return;
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
const boxes = [
  "src/images/borderBoxes/borderBox1.webp",
  "src/images/borderBoxes/borderBox2.webp",
  "src/images/borderBoxes/borderBox3.webp",
  "src/images/borderBoxes/borderBox4.webp",
];

module.exports = withMT({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      background: "#faf3e0",
      "light-yellow": "#fff499b3",
      "light-green": "#8de08a",
    },
    extend: {
      width: {
        70: "70%",
      },
      height: {
        "80vh": "80vh",
        "75vh": "75vh",
        "70vh": "70vh",
		"65vh": "65vh",
      },
      maxWidth: {
        90: "90%",
      },
      maxHeight: {
        60: "60%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
