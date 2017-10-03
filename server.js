var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content from the "public" directory
app.use(express.static("public"));

// Set body-parser middleware to handle forms and json data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/controller.js");

// On every route, use the routes middleware
app.use(routes);

// Listen to incoming requests
app.listen(port);
