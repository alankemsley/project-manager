// Dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: false}));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Listener
var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log("Server started. App is now listening on port: " + PORT);
});
