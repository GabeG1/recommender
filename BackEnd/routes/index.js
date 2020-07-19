var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("At Backend and about to res.send")
  res.send("Hello");
});

module.exports = router;
