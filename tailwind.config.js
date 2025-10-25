/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f3',
          100: '#f7e6d5',
          200: '#eec9a3',
          300: '#e5a871',
          400: '#dc874f',
          500: '#d06224',
          600: '#b8491f',
          700: '#99351b',
          800: '#7a281a',
          900: '#5e1f17',
        }
      }
    },
  },
  plugins: [],
}
