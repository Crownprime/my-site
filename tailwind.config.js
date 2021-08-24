module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
    },
    spacing: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
