const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,mdx}', './template.html'],
  darkMode: 'media',
  theme: {
    extend: {
      flex: {
        initial: '0 0 auto',
      },
    },
  },
  plugins: [
    plugin(function mask({ matchUtilities }) {
      matchUtilities({
        mask(image) {
          return {
            'mask-image': `${image}`,
            'mask-repeat': 'repeat',
            'mask-size': 'contain',
          };
        },
        ['animation-delay'](ms) {
          return {
            'animation-delay': `${ms}ms`,
          };
        },
      });
    }),
  ],
};
