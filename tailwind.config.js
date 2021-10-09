module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/bg-hero.jpg')",
      },
      colors: {
        darkprimary: '#B8111C',
        primary: '#DB202C',
        secondary: '#14191F',
        accent: '#458ADC',
        darkgrey: '#1F2731',
        grey: '#38485C'
      }
    },
  },
  backgroundColor: (theme) => ({
    ...theme('colors')
  }),
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
