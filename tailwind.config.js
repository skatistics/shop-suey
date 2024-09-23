/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens:{
      xs:'375px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
    },
    extend: {
      colors:{
        'ct-light-olive-A3BCB6': '#A3BCB6',
        'ct-light-greenleaf-39603D': '#39603D',
        'ct-light-browngrey-3C403D': '#3C403D',
        'ct-light-tanly-DADED4': '#DADED4',
        'ct-dark-green-164A41': '#164A41',
        'ct-dark-green-4D774E': '#4D774E',
        'ct-dark-green-9DC88D': '#9DC88D',
        'ct-dark-yellow-F1B24A': '#F1B24A',
      },
    },
  },
  plugins: [],
}



