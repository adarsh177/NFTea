module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#ffffff',
      },
      green: {
        light: '#6fcf97',
        DEFAULT: '#27AE60',
        dark: '#219653',
        darker: '#1e874b',
      },
      red: {
        light: '#FFEAEA',
        DEFAULT: '#EB5757',
        dark: '#C20D0D',
      },
      blue: {
        light: '#EBF5FF',
        DEFAULT: '#0070F3',
        dark: '#0040C1',
      },
      yellow: {
        light: '#FFF8E0',
        DEFAULT: '#FFCA28',
        dark: '#FFA000',
      },
      orange: {
        light: '#FFEBDA',
        DEFAULT: '#F66A0A',
        dark: '#A04100',
      },
      purple: {
        light: '#EAE8FF',
        DEFAULT: '#6F00FF',
        dark: '#4200B3',
      },
      primary: {
        DEFAULT: '#11243f',
      },
      warning: {
        DEFAULT: '#D1711C',
      }
    },
    extend: {
      boxShadow: {
        default: '0px 10px 20px rgba(150, 150, 187, 0.1)',
      },
      fontSize: {
        '2rem': '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};