module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],

    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      'postcss-preset-env': { stage: 2 },
    },
  };

