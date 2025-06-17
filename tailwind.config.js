/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'pastel-pink': '#FFCAD4',
        'pastel-yellow': '#FFFFD1',
        'pastel-lilac': '#E0C3FC',
        'pastel-green': '#B5EAD7',
        'pastel-pink-dark': '#F7A8B8',
        'pastel-yellow-dark': '#F7F5B8',
        'pastel-lilac-dark': '#C9A6E8',
        'pastel-green-dark': '#92D5B9',
      },
      backgroundImage: {
        'gradient-pastel': 'linear-gradient(135deg, #FFCAD4 0%, #FFFFD1 25%, #E0C3FC 50%, #B5EAD7 75%, #FFCAD4 100%)',
        'gradient-header': 'linear-gradient(90deg, rgba(255,202,212,0.9) 0%, rgba(224,195,252,0.9) 50%, rgba(181,234,215,0.9) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};