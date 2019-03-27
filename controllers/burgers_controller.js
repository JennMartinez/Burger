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

// router.post("/api/burgers", function(req, res) {
//   burger.create(["burger_name"], [req.body.burger_name], function(result) {
//     res.json({ id: result.insertId });
//       res.redirect("/burgers");
//   });
// });

router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
});

// Export routes for server.js //
module.exports = router;
