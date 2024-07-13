/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
            boxShadow: {
        white: '0 0 10px 5px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        pulse1: 'pulse 2s infinite ease-in-out -0.8s',
        pulse2: 'pulse 2s infinite ease-in-out -0.6s',
        pulse3: 'pulse 2s infinite ease-in-out -0.4s',
        pulse4: 'pulse 2s infinite ease-in-out -0.2s',
        pulse5: 'pulse 2s infinite ease-in-out 0s',
      },
      keyframes: {
        pulse: {
          '0%': {
            transform: 'scale(0.8)',
            backgroundColor: '#EA3324',
            boxShadow: '0 0 0 0 rgba(234, 51, 36, 0.7)',
          },
          '50%': {
            transform: 'scale(1.1)',
            backgroundColor: '#B21C18',
            boxShadow: '0 0 0 6px rgba(234, 51, 36, 0)',
          },
          '100%': {
            transform: 'scale(0.8)',
            backgroundColor: '#EA3324',
            boxShadow: '0 0 0 0 rgba(234, 51, 36, 0.7)',
          },
        },
      },
    },
  },
  plugins: [],
};
