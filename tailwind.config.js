/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/**/*.{js,jsx,ts,tsx}", // Tell Tailwind to scan these files for class names
   ],
  theme: {
    extend: {
      colors: {
        primaryColor:'#3577da',
        seconfryColor: '#02111b',
        thirdColor: '#44B0FF',
        bgGray: '#f8f9fa',
        bgGrayDark: '#dae3e5',
        fontColor: '#1e2636'
      },
      container: {
        center: true, // Centers the container by default
        padding: '2rem', // Adds padding to the container
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1199px',
          '2xl': '1400px', // Customize larger screen sizes
        },
      },
    },
  },
  plugins: [],
}

