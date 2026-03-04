/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#0a0a0c',
        neonCyan: '#00f2ff',
        neonPurple: '#7000ff',
      }
    },
  },
  plugins: [],
}