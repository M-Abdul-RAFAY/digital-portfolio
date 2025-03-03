/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'gradient-xy': 'gradient-xy 3s ease infinite',
        'text-gradient': 'text-gradient 4s ease infinite',
        'floating1': 'floating 10s ease-in-out infinite',
        'floating2': 'floating 15s ease-in-out infinite',
        'floating3': 'floating 12s ease-in-out infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'text-gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': '0% center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': '100% center'
          }
        },
        'floating': {
          '0%': {
            transform: 'translate(0px, 0px)',
            opacity: '0'
          },
          '50%': {
            transform: 'translate(100px, 100px)',
            opacity: '0.5'
          },
          '100%': {
            transform: 'translate(0px, 0px)',
            opacity: '0'
          }
        }
      },
      colors: {
        primary: {
          DEFAULT: '#10B981',
          dark: '#059669',
        }
      }
    },
  },
  plugins: [],
};