// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: {
          bg: '#212ea0'
        }
      }
    },
  },
  plugins: [],
}