// const defaultTheme = require('tailwindcss/defaultTheme')

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//     purge: [],
//     purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//      darkMode: false, // or 'media' or 'class'
//      theme: {
//        extend: {
//         fontFamily: {
//                     sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
//                },
//        },
//      }, 

//      variants: {
//        extend: {},
//      },
//      plugins: [],
//    }
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
 
  
    purge: [],
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
     
      screens:{
        'xs':'500px',
        'xxs':'400px',
        'xxxs':'370px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
  
       extend: {
        fontFamily: {
          sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
          Satisfy:['Satisfy'],
          Tourney:['Tourney'],
          londrina:['Londrina Outline'],
          nella: ["NellaSueDEMO, Nella"],
          VKTS: ['VTKSFLOWERSINOURSOUL,VKTS']


        },
       height:{
         '95':'95vh',
       },
        screens: {
  
          'landscape1': {'raw': '(max-height: 552px)'},
          'lphone': {'raw': '(min-height: 750px),(min-width:365px)'},
          'landsc': {'raw': '(max-height: 1234px),(min-width:920px)'},
       
        
          
          // => @media (max-height: 1234px) { ... }
        },

       },
     },
    
     variants: {
       extend: {
        
       },
     },
    
   }
