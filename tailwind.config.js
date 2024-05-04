/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#DBAC2C',
        yellowLight: '#F1E9C9',
        yellowDark: '#C47F17',

        purple: '#8047F8',
        purpleLight: '#EBE5F9',
        purpleDark: '#4B2995',

        baseTitle: '#272221',
        baseSubtitle: '#403937',
        baseText: '#574F4D',
        baseLabel: '#8D8686',
        baseHover: '#D7D5D5',
        baseButton: '#E6E5E5',
        baseInput: '#EDEDED',
        baseCard: '#F3F2F2',
        background: '#FAFAFA',
      },
      fontFamily: {
        title: ["'Baloo 2'", 'sans-serif'],
        text: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        image: "url('./background.png')",
      },
    },
  },
  plugins: [],
}
