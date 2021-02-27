var express = require('express');
var router = express.Router();
var WebSocket = require('ws');
process.env.NODE_ENV = 'DISABLE_DRIVER';
if (process.env.NODE_ENV !== 'DISABLE_DRIVER' ) var driver = require('../pigpio-driver');

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
    case 'sequence':
      if (process.env.NODE_ENV !== 'DISABLE_DRIVER' ) driver.init();
      console.log("this ran");
      break;
    case 'speed':
      if (process.env.NODE_ENV !== 'DISABLE_DRIVER' ) driver.setSpeed(params[1]);
      break;
    case 'stop':
      if (process.env.NODE_ENV !== 'DISABLE_DRIVER' ) driver.stop();
      break;
    case 'forward':
      if (process.env.NODE_ENV !== 'DISABLE_DRIVER' ) driver.drive('forward');
      break;
    case 'left':
      if (process.env.NODE_ENV !== 'DISABLE_DRIVER' ) driver.drive('left');
      break;
    case 'right':
      if (process.env.NODE_ENV !== 'DISABLE_DRIVER' ) driver.drive('right');
      break;
    case 'reverse':
      if (process.env.NODE_ENV !== 'DISABLE_DRIVER' ) driver.drive('reverse');
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
  if (process.env.NODE_ENV !== 'DISABLE_DRIVER' ) driver.setSpeed(req.params.value)
  // console.log(req.params.value)
  next()
}, function (req, res) {
  res.send('Got a PUT request at /value')
})

router.post('/stop', function (req, res, next) {
  if (process.env.NODE_ENV !== 'DISABLE_DRIVER' ) driver.stop()
  next()
}, function (req, res) {
  res.send('Got a POST request at /stop')
})

router.post('/forward', function (req, res, next) {
  if (process.env.NODE_ENV !== 'DISABLE_DRIVER' ) driver.drive("forward")
  next()
}, function (req, res) {
  res.send('Got a POST request at /forward')
})

router.post('/left', function (req, res, next) {
  if (process.env.NODE_ENV !== 'DISABLE_DRIVER' )// driver.drive("left")
  next()
}, function (req, res) {
  res.send('Got a POST request at /left')
})

router.post('/right', function (req, res, next) {
  if (process.env.NODE_ENV !== 'DISABLE_DRIVER' ) driver.drive("right")
  next()
}, function (req, res) {
  res.send('Got a POST request at /right')
})

router.post('/reverse', function (req, res, next) {
  if (process.env.NODE_ENV !== 'DISABLE_DRIVER' ) driver.drive("reverse")
  next()
}, function (req, res) {
  res.send('Got a POST request at /reverse')
})

module.exports = router;
