// const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Gallery = require("../models/Gallery")


module.exports = {
  getDashboard: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      // Fetch the latest 3 images from the gallery
      const latestImgs = await Gallery.find({user: req.user.id}).sort({createdAt: -1}).limit(3);
      res.render("dashboard.ejs", { posts: posts, user: req.user, images: latestImgs });
    } catch (err) {
      console.log(err);
    }
  },
};