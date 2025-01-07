const cloudinary = require("../middleware/cloudinary");
const Gallery = require("../models/Gallery");

module.exports = {
  getGallery: async (req, res) => {
    try {
      const galleries = await Gallery.find({user: req.user}).sort({ createdAt: "desc" });
      // console.log(galleries)
      res.render("gallery.ejs", { galleries: galleries, user: req.user });
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
  // updateCaption : async (req, res) => {
  //   try {
  //     await Gallery.findByIdAndUpdate(req.params.id,
  //       {caption: req.body.caption},
  //       {new: true}
  //     );
  //     console.log("Caption updated")
  //     res.redirect("/gallery")
  //   } catch (err) {
  //     console.log(err)
  //     res.redirect("/gallery")
  //   }
  // },

  deleteImage: async (req, res) => {
    try {
      // Find post by id
      // console.log(req.params.id)
      const galleries = await Gallery.findById(req.params.id);
      // console.log(galleries)
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(galleries.cloudinaryId);

      // Delete post from db
      await Gallery.findOneAndDelete({ _id: req.params.id });
      console.log("Deleted Photo");
      res.redirect("/gallery");
    } catch (err) {
      res.redirect("/dashboard");
    }
   
  },
};
