/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#0a0a0a',
          800: '#121212',
          700: '#1c1c1c',
        },
        primary: '#6366f1', // Indigo 500
        accent: '#8b5cf6', // Violet 500
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}

