** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#0e0a1a',
        'bg-surface': '#1a1330',
        'bg-card': '#1e1638',
        'purple-primary': '#7c3aed',
        'purple-light': '#8b5cf6',
        'purple-bright': '#a78bfa',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
