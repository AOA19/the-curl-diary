/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./public/**/*.js"],
  theme: {
    extend: {
      colors: {
        orchid: "#75328A",
        floral: "#BC89DC",
        lavendar: "#DECAE1",
      },
    },
  },
  plugins: [],
};

