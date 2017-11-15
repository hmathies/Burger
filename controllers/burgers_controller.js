//importing our packages
var express = require('express');
var router = express.Router();
//importing our model
var burger = require('../models/burger.js');

//the `router` for the app
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {

  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name

  ], function(res) {

    res.redirect('/');
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: true
  }, condition, function(result) {
    res.redirect('/');
  });
});

// export the `router`
module.exports = router;
