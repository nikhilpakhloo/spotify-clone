/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
          primary: '#121212',
          secondary: '#C1BFFF',
          primaryText: '#FFFFFF',
          secondaryText:"#D1D5DB",
          placeholder: "#E5E7EB",
          primaryButton:'#16a34a',
          secondaryButton:"#2c2b2b"
      
      },
    },
  },
  plugins: [],
};
