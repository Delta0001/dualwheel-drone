var express = require('express');
var router = express.Router();
var driver = require('../driver')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/stop', function (req, res, next) {
  res.send('Got a PUT request at /stop')
  next()
}, function (req, res) {
  driver.stop();
})

router.post('/forward', function (req, res, next) {
  res.send('Got a PUT request at /forward')
}, function (req, res) {
  driver.drive("forward");
})

router.post('/left', function (req, res, next) {
  res.send('Got a PUT request at /left')
}, function (req, res) {
  driver.drive("left");
})

router.post('/right', function (req, res, next) {
  res.send('Got a PUT request at /right')
}, function (req, res) {
  driver.drive("right");
})

router.post('/reverse', function (req, res, next) {
  res.send('Got a PUT request at /reverse')
}, function (req, res) {
  driver.drive("reverse");
})


module.exports = router;
