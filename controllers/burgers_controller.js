// Dependencies //
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
      var hbsObject = {
          burgerData: data
      }
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// router.post("/api/cats", function(req, res) {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
    // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

// Export routes for server.js to use.
module.exports = router;
