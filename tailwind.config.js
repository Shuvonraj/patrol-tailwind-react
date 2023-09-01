/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        primary:'#F40404',
      }
    },
    maxWidth: {
      container: '1144px',
    },
    fontFamily:{
      mono: ['Montserrat', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif']
    },
    backgroundImage:{
      'banner':'url("./Images/banner.png")',
      slider1: "url('./images/slider1.png')",
      slider2: "url('./images/slider2.png')",
      slider3: "url('./images/slider3.png')",
      slider4: "url('./images/slider4.png')",
      services1:"url('/src/Images/services1.png')",
      services2:"url('./Images/services2.png')",
      services3:"url('./Images/services3.png')",
      about:"url('./images/about.jpg')",
      logo:"url('./images/logo.jpg')",
      blog1:"url('./images/blog1.png')",
      blog2:"url('./images/blog2.png')",
      blog3:"url('./images/blog3.png')",
      map:"url('./images/maps.png')",
    },
  },
  plugins: [],
}