module.exports = {
  getResources: (req, res) => {
    res.render("resources.ejs", { user: req.user });
  },
};
