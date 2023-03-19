module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
            // 
            primary: {
                50: '#f4f5f5', 
                100: '#e8eceb', 
                200: '#c6cfce', 
                300: '#a4b2b0', 
                400: '#607975', 
                500: '#1c3f3a', 
                600: '#193934', 
                700: '#152f2c', 
                800: '#112623', 
                900: '#0e1f1c'
            },
            // 
            secondary: {
                50: '#fefefd', 
                100: '#fdfdfb', 
                200: '#faf9f5', 
                300: '#f7f5ef', 
                400: '#f0eee3', 
                500: '#eae6d7', 
                600: '#d3cfc2', 
                700: '#b0ada1', 
                800: '#8c8a81', 
                900: '#737169'
            },
            // 
            sub: {
                50: '#f4f4f4', 
                100: '#e9e9e9', 
                200: '#c7c7c7', 
                300: '#a5a5a5', 
                400: '#626262', 
                500: '#1e1e1e', 
                600: '#1b1b1b', 
                700: '#171717', 
                800: '#121212', 
                900: '#0f0f0f'
            }
          },
          fontFamily: {
            sans: ['Gill Sans', 'sans-serif'],
            heading: ['Gill Sans', 'sans-serif'],
          },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  