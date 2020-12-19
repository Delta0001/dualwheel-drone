var express = require('express');
var router = express.Router();
var driver = require('../driver')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/stop', function (req, res) {
  res.send('Got a PUT request at /stop')
  driver.stop();
})

router.post('/forward', function (req, res) {
  res.send('Got a PUT request at /forward')
  driver.drive("forward");
})

router.post('/left', function (req, res) {
  res.send('Got a PUT request at /left')
  driver.drive("left");
})

router.post('/right', function (req, res) {
  res.send('Got a PUT request at /right')
  driver.drive("right");
})

router.post('/reverse', function (req, res) {
  res.send('Got a PUT request at /reverse')
  driver.drive("reverse");
})

module.exports = router;
