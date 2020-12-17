var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/forward', function (req, res) {
  res.send('Got a PUT request at /forward')
})

router.post('/left', function (req, res) {
  res.send('Got a PUT request at /left')
})

router.post('/right', function (req, res) {
  res.send('Got a PUT request at /right')
})

router.post('/down', function (req, res) {
  res.send('Got a PUT request at /down')
})

module.exports = router;
