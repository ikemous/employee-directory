const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const employees = require("./models/employees.js")
const compression = require("compression");

const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost/employees";
const server = express();

mongoose.connect(MONGODB_URL);

//compress files for Progressive Web Applications
server.use(compression());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
}

// Sets up the Express app to handle data parsing
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get("/employees", (req, res) => {
  employees.find({}).then(collections => {
    res.json(collections);
  });
});

server.get("/employees/sort/:sortName", ({params}, res) => {
  employees.find({}).sort({[params.sortName]: 1}).then(collections => {
    res.json(collections);
  });
});

server.get("/employees/:category/:filter", ({params}, res) => {
  employees.find({[params.category]: params.filter}).then(collections => {
    res.json(collections);
  })
});

server.get("/employees/:category/:filter/sort/:sortName", ({params}, res) => {
  employees.find({[params.category]: params.filter}).sort({[params.sortName]: 1}).then(collections => {
    res.json(collections);
  });
});


// Send every request to the React app
// Define any API routes before this runs
server.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
