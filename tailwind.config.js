/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        deepgreen: '#4AAB3D',
        lightgreen: '#E3FAEA',
        btncolor: '#1F1F25'
        // btnactive: '#FBAF85'
      }
    },
  },
  plugins: [],

  // Add custom utilities using Tailwind's @layer
  safelist: [],
}

