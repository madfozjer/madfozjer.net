/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
    fontFamily: {
      'ibm-plex':['"IBM Plex Mono"', 'monospace'],
      'test':['"Xanh Mono"', 'monospace'],
      'ubuntu':['"Ubuntu Mono"', 'monospace'],
    },
    screens: {
      'xsm': '0'
    }
  },},
  plugins: [],
  
}