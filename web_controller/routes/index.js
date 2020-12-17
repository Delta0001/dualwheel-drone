var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.POST('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

module.exports = router;
