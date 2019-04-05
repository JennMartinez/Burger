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



router.post("/", function(req, res) {
  if(req.body.burger_name !== "") {
    burger.create(req.body.burger_name.trim(), function() {
      res.redirect("/");
    });
  }
});

router.get("/test", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.json(hbsObject);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result){
    console.log(result); 
    res.sendStatus(200);
  });  
});

router.post("/api/burgers/new_burger", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/burgers");
  });
});

// Export routes for server //
module.exports = router;
