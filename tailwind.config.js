module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {},
    colors: {
      N: {
        0: '#ffffff',
        50: '#f5f6f7',
        500: '#8f959e',
        900: '#1f2329',
        950: '#0f1114',
      },
    },
    fontSize: {
      sm: ['12px', '20px'],
      base: ['14px', '22px'],
      lg: ['16px', '24px'],
      xl: ['18px', '26px'],
      '2xl': ['20px', '28px'],
      '3xl': ['22px', '30px'],
      '4xl': ['24px', '32px'],
      '5xl': ['30px', '40px'],
    },
    spacing: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
    boxShadow: {
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
