var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('startpackage', { title: '' });
});

/* Firstgame page*/
router.get('/firstgame', function(req, res, next) {
  res.render('firstgame', { title: '' });
});

/* Secondgame page*/
router.get('/secondgame', function(req, res, next) {
  res.render('secondgame', { title: '' });
});
module.exports = router;

/* thirdgame page*/
router.get('/thirdgame', function(req, res, next) {
  res.render('thirdgame', { title: '' });
});
module.exports = router;

/* foregame page*/
router.get('/secondgame', function(req, res, next) {
  res.render('secondgame', { title: '' });
});
module.exports = router;

/* fifegame page*/
router.get('/secondgame', function(req, res, next) {
  res.render('secondgame', { title: '' });
});
module.exports = router;
