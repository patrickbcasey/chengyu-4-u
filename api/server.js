const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const logger = require("morgan");
const cors = require("cors");
const path = require('path')
const apiRoutes =  require("./routes/apiRouter");


app.use(cors());

// require .env file
require("dotenv").config({ path: ".env" });

// Connect to database
connectDB();

// Body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(logger("dev"));

// Setup Routes
app.use("/api", apiRoutes);
app.use(express.static(path.join(__dirname, '/../client/build')))
app.get("*", (req, res) =>
  res.sendFile(
    path.join(__dirname + '/../client/build/index.html')
  )
)

// Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is running");
});

