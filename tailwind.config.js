/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#fafafa',
          surface: '#ffffff',
          warm: '#f5f5f7',
          elevated: '#f0f0f3',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-hover': 'rgba(0, 0, 0, 0.22)',
        },
        accent: {
          blue: '#2563eb',
          electric: '#0066ff',
          sky: '#0284c7',
          dark: '#0a0a0c',
        },
        text: {
          primary: '#0a0a0c',
          secondary: '#475569',
          muted: '#8492a6',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.02em',
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
