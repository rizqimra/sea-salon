/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/assets/hero-bg.webp')",
        'hero-mobile': "url('/assets/hero-bg-mobile.webp')",
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Playfair Display', 'serif'],
        tertiary: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

