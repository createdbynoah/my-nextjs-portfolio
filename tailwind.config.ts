import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--background)',
          50: 'var(--background-50)',
          100: 'var(--background-100)',
          200: 'var(--background-200)',
          300: 'var(--background-300)',
          400: 'var(--background-400)',
          500: 'var(--background-500)',
          600: 'var(--background-600)',
          700: 'var(--background-700)',
          800: 'var(--background-800)',
          900: 'var(--background-900)',
          950: 'var(--background-950)',
        },
        fg: {
          DEFAULT: 'var(--foreground)',
          50: 'var(--foreground-50)',
          100: 'var(--foreground-100)',
          200: 'var(--foreground-200)',
          300: 'var(--foreground-300)',
          400: 'var(--foreground-400)',
          500: 'var(--foreground-500)',
          600: 'var(--foreground-600)',
          700: 'var(--foreground-700)',
          800: 'var(--foreground-800)',
          900: 'var(--foreground-900)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-big-shoulders-display)', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1f67f1',
        },
        dark: {
          primary: '#e3f054',
        },
      },
    ],
  },
} satisfies Config;
