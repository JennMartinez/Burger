// Dependencies //
var express = require("express");
var exphbs = require("express-handlebars");
var router = require("./controllers/burgers_controller.js");

// Instance of the express app //
var app = express();

// Port for the app //
var PORT = process.env.PORT || 8080;

// Public Directory where serve static content is accessed for the app //
app.use(express.static("public"));

// Express //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars //
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Router //
app.use(router);

// PORT Listening //
app.listen(PORT), function() {
    console.log("Boneyard Burger listening on PORT " + PORT);
};