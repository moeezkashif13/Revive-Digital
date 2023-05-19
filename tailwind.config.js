/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      colors:{
        'primary' : '#EC0044',
        'secondary' : '#262729'
      },

      padding:{
        'common' : '112px'
      },


      backgroundColor:{
        'primary' : '#EC0044',
        'secondary' : '#262729'
      }
      
    },
  },
  plugins: [],
}
