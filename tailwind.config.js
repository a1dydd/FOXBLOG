/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '360px',   
        'md': '703px',  
        'lg': '941px',   
        'xl': '1054px',  
        '2xl': '1204px',  
      },
      keyframes: {
        'underline-animate': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'right' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      animation: {
        'underline-animate': 'underline-animate 0.3s ease-out',
      },
      colors: {
        'highlight': '#E14E52',
      },
    },
  },
  plugins: [],
}
