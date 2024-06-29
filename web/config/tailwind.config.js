/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./start-rw-tw.config.js')],
  content: [
    'src/**/*.{js,jsx,ts,tsx}',
    '../node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
