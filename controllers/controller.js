// Dependencies
var express = require("express");
var project = require("../models/project.js");
var router = express.Router();

// Routes
router.get("/", function(req, res) {
  project.all(function(data) {
    var hbsObject = {
      projects: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  project.create([
    "project_name", "in_progress", "complete"
  ], [
    req.body.name, req.body.in_progress, req.body.complete
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var status = "id = " + req.params.id;

  console.log("Status", status);

  project.update({
    in_progress: req.body.in_progress
  }, status, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use
module.exports = router;
