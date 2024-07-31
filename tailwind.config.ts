/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

theme: {
  
  // screens: {
  //   'xs': {'max': '350px'},
  //   'sm': {'max': '575px'},
  //   'md': {'max':'768px'},
  //   'lg': {'max':'960px'},
  //   'xl': {'max':'1200px'},
  //   'xl2': {'max':'1300px'},
  //   'xxl': {'max':'1400px'},
  //   'xxl2': {'max':'1600px'},
  //   'xxxl': {'max':'1920px'},
  // },
  screens:{
    'xs': '350px',
    'sm': '575px',
    'md': '768px',
    'lg': '960px',
    'tab': '1024px',
    'xl': '1200px',
    'xl2': '1300px',
    'xxl': '1400px',
    'xxl2': '1600px',
    'xxxl': '1920px',
  },

 
  extend: {
  
    fontFamily: {
      "notosans": ['NotoSans', 'sans-serif'],
    },
    fontSize:{
        heading1: "36px",
        heading2: "30px",
        heading3: "24px",
        paralarge: "18px",
        para: "14px",
        xsmall: "12px"
    },
    backgroundColor:{
      
      
    },
    borderColor:{
      
    },
    maxWidth:{
      container: "1136px"
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 60.5%, rgba(0, 0, 0, 0) 100%)',
    },
    colors:{
      darkGrey:"#111827",
      mediumGrey:"#374151",
      lightGrey: "#626060",
      lighterGrey: "#6B7280",
      lightestGrey: "#d3d3d3",
      ctaBlue: "#4B4EFC",
      ctaHoverBlue: "#1E22FB",
      greyBorder: "#D1D5DB",
      hoverGrey: "#E5E7EB",
      boxGrey: "#F3F4F6",
      lightWhite: "#f1f1f1",

    }
  },
},
plugins: [],
}
