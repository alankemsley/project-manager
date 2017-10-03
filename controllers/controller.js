// Dependencies
var express = require("express");
var project = require("../models/project.js");
var router = express.Router();

// Routes
router.get("/", function(req, res) {
  project.selectAll(function(data) {
    var hbsObject = {
      projects: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  project.create([
    "project_name", "complete"
  ], [
    req.body.project_name, req.body.complete
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var status = "id = " + req.params.id;

  console.log("status", status);

  project.update({
    complete: req.body.complete
  }, status, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use
module.exports = router;
