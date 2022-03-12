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
          sans: ['Raleway, sans-serif', ...defaultTheme.fontFamily.sans],
          Satisfy:['Satisfy'],
          Tourney:['Tourney'],
          londrina:['Londrina Outline'],
          nella: ["NellaSueDEMO, Nella"],
          VKTS: ['VTKSFLOWERSINOURSOUL,VKTS'],
          Caveat:['Caveat'],
           Cedarvill:['Cedarville Cursive'],
           Open:['Open, sans-serif'],
           seaweed:['Seaweed Script, cursive'],
          Lo:['Londrina Outline , cursive']
          

        },
     margin: {
      '90vw': '90vw',
      '86vw':'86vw',
      '80vw':'80vw',
      '22':'22vw'

        },
       height:{
         '95':'95vh',
         '90':'90vh',
         '75':'75vh',
         '98':'98vh',
         '85':'85vh'
       },

        screens: {
          '3xl':'2560px',
          'iphonex': {'raw':'(min-width: 370px) and (height:812px)'},
          'landscape1': {'raw': '(max-height: 552px)'},
          'lphone': {'raw': '(min-height: 750px),(min-width:365px)'},
          'landsc': {'raw': '(max-height: 1234px),(min-width:920px)'},
          'tb': {'raw': '(min-height: 1024px) and (min-width:789px)'},
          'desk':{'raw': '(min-width: 1536px) and (max-width: 1700px)'},
          
          
        
          
          // => @media (max-height: 1234px) { ... }
        },
        

       },
     },
    
     variants: {
       extend: {
        
       },
     },
    
   }
