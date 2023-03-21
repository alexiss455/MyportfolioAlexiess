/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Navy': '#0a192f',
        'Light-Navy': '#112240',
        'Lightest-Navy': '#233554',
        'Slate': '#8892b0',
        'Lightest-Slate': '#ccd6f6',
        'White': '#e6f1ff',
        'Green': '#64ffda'
      },
      fontFamily: {
        'sans': ['Inconsolata'],
      },
      width: {
        'one': '1px',
        'Max': '1100px'
        
      },
      height: {
        'one': '1px'
      }
    },
  },
  variants: {},
  plugins: [],
}
