const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");

// Main Routes
router.get("/", apiController.getIndex);

module.exports = router;