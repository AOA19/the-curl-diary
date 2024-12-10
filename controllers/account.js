// const cloudinary = require("../middleware/cloudinary");

module.exports = {
  getAccount: async (req, res) => {
    try {
      res.render("account.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
