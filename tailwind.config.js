/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#51B591',
        secondary: '#177BC0',
        darkPrimary: '#04915f'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus', 'group-hover']
    },
  },
  plugins: [],
}

