const cloudinary = require("../middleware/cloudinary");
const Gallery = require("../models/Gallery");

module.exports = {
  getGallery:  async (req, res) => {
    try {
      const galleries = await Gallery.find()
      res.render("gallery.ejs", {galleries: galleries});
    } catch (err) {
      console.log(err);
    }
  },
  createImage: async (req, res) => {
    try {
      // Upload images to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Gallery.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        user: req.user.id,
        date: req.body.createdAt,
      });
      console.log("Photo has been added to gallery!");
      res.redirect("/gallery");
    } catch (err) {
      console.log(err);
    }
  },
};
