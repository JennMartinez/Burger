// Dependencies //
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// Routes //
router.get("/", function(req, res) {
  res.redirect("/burgers");
  
});
  
router.get("/burgers", function(req,res){

  burger.all(function(burgerData){
    res.render("index", { burger_data: burgerData});
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name"], [req.body.burger_name], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
});

// Export routes for server.js //
module.exports = router;
