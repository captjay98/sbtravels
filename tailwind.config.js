/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A1128',
          gold: '#D4AF37',
          'gold-light': '#E5C158',
          'gold-dark': '#B8941F',
        },
        luxury: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#ebe3d5',
          300: '#ddd0b8',
          400: '#c9b594',
          500: '#b89968',
          600: '#a88350',
          700: '#8c6b42',
          800: '#735839',
          900: '#5f4931',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "luxury-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 40px -10px rgba(212, 175, 55, 0.3)',
        'luxury-lg': '0 20px 60px -10px rgba(212, 175, 55, 0.4)',
      },
    },
  },
  plugins: [],
};
