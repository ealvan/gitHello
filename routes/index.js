var express = require('express');
var router = express.Router();
var platform = ["Linux", "Windows", "Unix/MacOS"];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: platform[0] });
});
console.log("You're running on: ", process.platform);
module.exports = router;
