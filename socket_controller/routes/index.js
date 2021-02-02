var express = require('express');
var driver = require('../driver')
var router = express.Router();
var WebSocket = require('ws');

// WebSocket setup
var socketServer = new WebSocket.Server({port: 3030});

socketServer.on('connection', (socketClient) => {
  console.log('Connected: client Set length: ', socketServer.clients.size);

  socketClient.on('message', (message) => {
    console.log( 'received: ' + message);
    handleMessage(message);
  });

  socketClient.on('close', (socketClient) => {
    console.log('Disconnected: Number of clients: ', socketServer.clients.size);
  });
});

function handleMessage(message) {
  var params = message.split(" ");

  switch (params[0]) {
    case 'speed':
      driver.setSpeed(params[1]);
      break;
    case 'stop':
      driver.stop();
      break;
    case 'forward':
      driver.drive('forward');
      break;
    case 'left':
      driver.drive('left');
      break;
    case 'right':
      driver.drive('right');
      break;
    case 'reverse':
      driver.drive('reverse');
      break;
    default:
      console.log("Unknown Message");
      break;
  }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/speed/:value', function (req, res, next) {
  driver.setSpeed(req.params.value)
  // console.log(req.params.value)
  next()
}, function (req, res) {
  res.send('Got a PUT request at /value')
})

router.post('/stop', function (req, res, next) {
  driver.stop()
  next()
}, function (req, res) {
  res.send('Got a POST request at /stop')
})

router.post('/forward', function (req, res, next) {
  driver.drive("forward")
  next()
}, function (req, res) {
  res.send('Got a POST request at /forward')
})

router.post('/left', function (req, res, next) {
  driver.drive("left")
  next()
}, function (req, res) {
  res.send('Got a POST request at /left')
})

router.post('/right', function (req, res, next) {
  driver.drive("right")
  next()
}, function (req, res) {
  res.send('Got a POST request at /right')
})

router.post('/reverse', function (req, res, next) {
  driver.drive("reverse")
  next()
}, function (req, res) {
  res.send('Got a POST request at /reverse')
})

module.exports = router;
