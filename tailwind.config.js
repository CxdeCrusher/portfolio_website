module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts}', './src/**/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
