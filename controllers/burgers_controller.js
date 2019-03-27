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

router.post("api/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result){
    console.log(result); 
    res.sendStatus(200);
  });  
});

router.put("/burger_name/:name", function(req, res) {
  burger.update(req.params.name, function(result) {
    console.log(result);
  });
});

// Export routes for server //
module.exports = router;
