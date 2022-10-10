module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      rotate: {
        '15': '15deg',
        '15-anti': '-15deg',
        '7.5': '7.5deg',
        '7.5-anti': '-7.5deg',
      },
      height: {
        '7.5': '1.875rem',
        '13': '3.125rem',
        '22': '5.625rem',
        '25': '6.438rem',
        '66': '16.5rem',
      },
      width: {
        '7.5': '1.875rem',
        '22': '5.625rem',
        '33': '8.188rem',
        '75': '19.313rem',
        '150': '32rem',
        '300': '64.25rem'
      },
      fontFamily: {
        'courier-prime': ['Courier Prime'],
        'alfa-slab-one': ['Alfa Slab One'],
      },
      colors: {
        'gold': '#EFCE4B',
        'gold-700': '#F0D465',
      },
      lineHeight: {
        '24': '5.5',
      },
    },
  },
  plugins: [],
};
