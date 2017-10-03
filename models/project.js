// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var project = {
  selectAll: function(cb) {
    orm.selectAll("projects", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays
  create: function(cols, vals, cb) {
    orm.create("projects", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, status, cb) {
    orm.update("projects", objColVals, status, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = project;
