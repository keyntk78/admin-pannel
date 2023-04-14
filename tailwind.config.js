module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      phone: '670px',

      tablet: '870px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'main-bg': '#ffff',
        'second-bg': '#fafafb',
        'txt-color': '#455560',
        'txt-white': '#ffff',
        'main-color': '#0060ff',
        'second-color': '#62b4ff',
        'third-color': '#D3EAFF',

        'main-color-blue': '#349eff',
        'second-color-blue': '#62b4ff',

        'main-color-red': '#fb0b12',
        'second-color-red': '#ff4a6b',

        'main-color-cyan': '#10d4d2',
        'second-color-cyan': '#2ae9e6',

        'main-color-green': '#019707',
        'second-color-green': '#4caf50',

        'main-color-orange': '#d68102',
        'second-color-orange': '#fca11a',

        'main-bg-light': '#ffffff',
        'second-bg-light': '#fafafb',
        'txt-color-light': '#455560',

        'main-bg-dark': '#2d2d2d',
        'second-bg-dark': '#202020',
        'txt-color-dark': '#bbbbbb'
      },
      boxShadow: {
        main: ' rgba(149, 157, 165, 0.2) 0px 8px 24px',
        'box-shadow-light': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        'box-shadow-dark': 'rgba(0, 0, 0, 0.2) 0px 5px 10px'
      },
      transitionTimingFunction: {
        cubic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    }
  },
  plugins: []
}
