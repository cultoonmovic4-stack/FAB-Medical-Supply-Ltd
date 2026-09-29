import { palette } from './src/styles/tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: palette.brand.blue,
          red: palette.brand.red,
          white: palette.brand.white,
        },
        dark: palette.neutral.dark,
        muted: palette.neutral.muted,
        surface: {
          light: palette.neutral.light,
        },
        border: {
          DEFAULT: palette.neutral.border,
          subtle: palette.neutral.border,
        },
      },
    },
  },
  plugins: [],
};
