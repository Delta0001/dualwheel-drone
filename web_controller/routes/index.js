var express = require('express');
var driver = require('../driver')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/speed/:id', function (req, res, next) {
  driver.setSpeed(req.params.id)
  next()
}, function (req, res) {
  res.send('Got a PUT request at /stop')
})

router.post('/stop', function (req, res, next) {
  driver.stop();
  next()
}, function (req, res) {
  res.send('Got a POST request at /stop')
})

router.post('/forward', function (req, res, next) {
  driver.drive("forward");
  next()
}, function (req, res) {
  res.send('Got a POST request at /forward')
})

router.post('/left', function (req, res, next) {
  driver.drive("left");
  next()
}, function (req, res) {
  res.send('Got a POST request at /left')
})

router.post('/right', function (req, res, next) {
  driver.drive("right");
  next()
}, function (req, res) {
  res.send('Got a POST request at /right')
})

router.post('/reverse', function (req, res, next) {
  driver.drive("reverse");
  next()
}, function (req, res) {
  res.send('Got a POST request at /reverse')
})

module.exports = router;
