/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        normal: "74rem"
      },
      colors: {
        'background-principal': '#c9d3db',
        'verde-padrao': '#035630'
      }
      
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      tx:['28px', '36px'],
      txg:['78px','86px']
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'Inter': 'sans-serif',
      'Poppins':'sans-serif'
    },
   
   
  },
  plugins: [],
}