import type { Config } from 'tailwindcss';

const config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-elevated': 'var(--color-surface-elevated)',
        foreground: 'var(--color-foreground)',
        'muted-foreground': 'var(--color-muted-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          soft: 'var(--color-primary-soft)',
          foreground: 'var(--color-primary-foreground)',
        },
        border: 'var(--color-border)',
        silver: 'var(--color-silver-token)',
        'dark-surface': 'var(--color-dark-surface)',
        graphite: 'var(--color-graphite)',
        charcoal: 'var(--color-charcoal)',
        'warm-white': 'var(--color-warm-white)',
        'brand-red': 'var(--color-brand-red)',
        'pure-white': 'var(--color-pure-white)',
      },
      fontFamily: {
        ui: ['var(--font-ui)'],
        body: ['var(--font-body)'],
        display: ['var(--font-display)'],
        editorial: ['var(--font-editorial)'],
        mono: ['var(--font-mono)'],
      },
      boxShadow: {
        soft: '0 20px 60px rgb(23 25 28 / 0.05)',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
