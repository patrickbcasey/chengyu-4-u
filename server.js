const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const indexRoutes = require("./routes/index");
const topicRoutes = require("./routes/topic");


//Use .env file in root
require("dotenv").config({ path: ".env" });

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/index", indexRoutes);
app.use("/topic", topicRoutes);


//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
