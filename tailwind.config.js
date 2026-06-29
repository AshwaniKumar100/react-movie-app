// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      screens : {
        "other" : {'min' : '340px' , 'max' : '1200px'},
      }
    },
  },
  plugins: [],
}