// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var project = {
  all: function(cb) {
    orm.all("project", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays
  create: function(cols, vals, cb) {
    orm.create("project", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("project", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = project;
