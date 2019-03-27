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

router.post("api/burgers", function(req, res) {
  burger.create(req.body.new_burger, function(result) {
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

// Export routes for server //
module.exports = router;
