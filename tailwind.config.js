/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem,5vw,3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section': ['clamp(1.75rem,3vw,2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
      },
    },
  },
  plugins: [tailwindScrollbar],
}
