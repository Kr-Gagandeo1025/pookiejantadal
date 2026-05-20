/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        nbn: {
          black: "#0D0D0D",
          black2: "#161616",
          black3: "#222222",
          beige: "#F5F0E8",
          beige2: "#EDE5D8",
          beige3: "#DDD4C4",
          red: "#C0182A",
          red2: "#96111F",
          text: "#1A1806",
          muted: "#6B6050",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
