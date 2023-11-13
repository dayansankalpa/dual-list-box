module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      colors: {
        primary: {
          100: '#d2b4cb',
          400: '#ff7210',
          700: '#ff7210',
          900: '#2c3e50',
          1200: '#1a1a1a',
          1500: '#ff5733',
        },
        teal: {
          700: '#00BFA5',
        },
      },
    },
  },
  screens: {
    '2xl': {
      'max': '1320px'
    },
    // => @media (max-width: 1535px) { ... }

    'xl': {
      'max': '1399px'
    },
    // => @media (max-width: 1279px) { ... }

    'lg': {
      'max': '1199px'
    },
    // => @media (max-width: 1023px) { ... }

    'md': {
      'max': '991px'
    },
    // => @media (max-width: 767px) { ... }

    'sm': {
      'max': '767px'
    },
    // => @media (max-width: 639px) { ... }

    'col': {
      'max': '567px'
    },
    // => @media (max-width: 320px) { ... }
  },
  fontFamily: {
    'base-font': ['Nunito Sans'],
    'heading-font': ['Futura PT'],
    'heading-font-s2': ['Futura PT Demi'],
  },
  plugins: [],
}
