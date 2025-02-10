module.exports = {
  content: [
    './src/**/*.{html,ts}', // prilagodite putanju vašem projektu
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      // vaše prilagođene stilizacije
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
