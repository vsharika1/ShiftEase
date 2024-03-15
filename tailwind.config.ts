import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'selector',
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      mono: ['Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'monospace'],
    },
    extend: {},
  },
  plugins: [formsPlugin, typographyPlugin],
} satisfies Config;
