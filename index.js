const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/weather", (req, res) => {
  res.sendFile(__dirname + "/weather.html");
});

app.get("/wikipedia_viewer", (req, res) => {
  res.render("wikipedia_viewer");
});

app.listen(3003, () => {
  console.log("Server started on port 3003.");
});
