var express = require('express');
var router = express.Router();

firstRespone = (req, res, next) => {
  req.helloMessage = "yo";
  next();
};
secondRespone = (req, res, next) => {
  res.send(req.helloMessage);
};
/* GET home page. */
router.get('/', firstRespone, secondRespone);

module.exports = router;
