/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FFFFFF',
          primary: '#16A34A',
          secondary: '#C1BFFF',
          primaryText: '#000000',
          placeholder: "#E5E7EB"
        },
        dark: {
          background: '#121212',
          primary: '#16A34A',
          secondary: '#C1BFFF',
          secondaryText: '#FFFFFF',
          placeholder: "#333333"

        },
      },
    },
  },
  plugins: [],
};
