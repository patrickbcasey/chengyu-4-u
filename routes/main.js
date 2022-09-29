const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

//Main Routes
router.get("/", homeController.getIndex);
router.get("/pronunciation", homeController.getPronunciation);


module.exports = router;