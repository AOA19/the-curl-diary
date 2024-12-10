const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const dashboardController = require("../controllers/dashboard");
const journalController = require("../controllers/journal");
const galleryController = require("../controllers/gallery");
const quizController = require("../controllers/quiz");
const resourceController = require("../controllers/resources");
const accountController = require("../controllers/account")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes 
router.get("/", homeController.getIndex);
// User dashboard route(s)
router.get("/dashboard", ensureAuth, dashboardController.getDashboard);
// router.get("/feed", ensureAuth, postsController.getFeed);
// Login routes
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
// Sign up routes
router.get("/signup", authController.getSignup);
// router.post("/signup", authController.postSignup);
router.post("/signup", upload.single("profilePic"), authController.postSignup);
// Quiz route(s)
router.get("/quiz", quizController.submitQuiz); // Add ensureAuth after testing is complete
// Journal route(s)
router.get("/journal", ensureAuth, journalController.getJournal)
router.post("/journal/createEntry", journalController.createEntry)
router.put("/journal/editEntry/:id", journalController.editEntry)
router.delete("/journal/deleteEntry/:pokemon", journalController.deleteEntry)
// Gallery route(s)
router.get("/gallery", ensureAuth, galleryController.getGallery)
router.post("/gallery/createImage", upload.single("file"), galleryController.createImage);
// router.put("/gallery/updateCaption/:id", galleryController.updateCaption)
router.delete("/gallery/deleteImage/:id", galleryController.deleteImage);
// Resources route(s)
router.get("/resources", resourceController.getResources)
// Account info route(s)
router.get("/account", ensureAuth, accountController.getAccount)

module.exports = router;
