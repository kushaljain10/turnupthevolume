/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0B',
        electricRed: '#FF2436',
        signalOrange: '#FF7A1A',
        secondaryText: '#B3B3B8',
        lines: '#1C1C21',
        success: '#00D68F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
        heading: ['"Space Grotesk"', 'Inter', 'system-ui'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        ctaGradient: 'linear-gradient(135deg, #FF2436 0%, #FF7A1A 100%)',
      },
    },
  },
  plugins: [],
}