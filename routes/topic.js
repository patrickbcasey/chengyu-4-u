const express = require("express");
const router = express.Router();
const topicController = require("../controllers/topic");

//Main Routes
router.get("/", topicController.getTopicIndex);

module.exports = router;