module.exports = {
  submitQuiz: (req, res) => {
    res.render("quiz.ejs");
  },
};

 /* submitQuiz: async (req, res) => {
    try {
        // when quiz is submitted store results in DB

        // once submitted redirect user to profile page - GET
        // res.redirect("/profile");
        // on profile page - display quiz results
        // display on page with HTML
        // conditional - if no results don't show on page
    }
  },
  */