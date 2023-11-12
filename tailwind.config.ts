import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        colPinkA: '#fbf6de',
        colPinkB: '#fbe8de',
        colBlueA: '#e1edf4'
      },
      fontFamily: {
        familyA: 'Grifter',
        familyB: 'PlusJakartaSans'
      },
      fontSize: {
        small: '0.8rem',
        smaller: '0.7rem',
        smallest: '0.6rem'
      },
      screens: {
        sm: '480px',
        md: '800px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}
export default config
