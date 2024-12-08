const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const journalController = require("../controllers/journal");
const galleryController = require("../controllers/gallery");
const quizController = require("../controllers/quiz");
const resourceController = require("../controllers/resources");
const accountController = require("../controllers/account")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/dashboard", ensureAuth, postsController.getDashboard);
// router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/quiz", quizController.submitQuiz);
router.get("/journal", ensureAuth, journalController.getJournal)
router.get("/gallery", ensureAuth, galleryController.getGallery)
router.get("/resources", resourceController.getResources)
router.get("/account", ensureAuth, accountController.getAccount)

module.exports = router;
