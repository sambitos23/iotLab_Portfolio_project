module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    animation: {
      'spin-slow': 'spin 4s linear infinite',
      'bounce-slow': 'bounce 5s infinite',
      'wiggle': 'wiggle 5s ease-in-out infinite'
     },
     extend: {
      keyframes: {
        wiggle: {
         '0%, 100%': { transform: 'translateY(20px)' },
         '50%': { transform: 'translateY(-20px)' },
       }
      },
      colors: {
        primary:{
          default:'#caf0f8',
        },
        secondary:{
          default:'#023e8a',
        },
        lightskyblue:{
          default:'#90e0ef',
        },
        neon:{
          default:'#00b4d8',
        },
        lighternavyblue:{
          default: '#0077b6',
        }       
      }
    },
    variants: {
      extend: {
        // backgroundColor: ['active'],
        // textColor: ['active'],
      },
    },
    plugins: [],
  },
}