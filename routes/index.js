const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");

//Main Routes
router.get("/", indexController.getIndexList);

module.exports = router;