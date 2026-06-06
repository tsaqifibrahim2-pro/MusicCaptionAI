module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg: '#0a0a0f',
        surface: '#12101a',
        card: '#1a1726',
        border: '#2a2440',
        violet: {
          DEFAULT: '#7C3AED',
          light: '#9F67FF',
          dark: '#5B21B6',
        },
        text: {
          primary: '#F0EEFF',
          secondary: '#9B8EC4',
          muted: '#5A5070',
        }
      }
    },
  },
  plugins: [],
}
