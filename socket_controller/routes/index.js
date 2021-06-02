var express = require('express');
var router = express.Router();
var WebSocket = require('ws');

// If environment variable is set, don't load the driver (which will only work on the Raspberry Pi)
if (process.env.DISABLE_DRIVER != 1) var driver = require('../pigpio-driver');

create = require('../create2-driver')

// WebSocket setup
var socketServer = new WebSocket.Server({port: 3030});

socketServer.on('connection', (socketClient) => {
  console.log('Connected: client Set length: ', socketServer.clients.size);
  
  socketClient.on('message', (message) => {
    handleMessage(message);
  });

  socketClient.on('close', (socketClient) => {
    console.log('Disconnected: Number of clients: ', socketServer.clients.size);
  });
});

function handleMessage(message) {
  console.log( 'received: ' + message);
  var params = message.split(" ");
  switch (params[0]) {
    case 'sequence':
      if (process.env.DISABLE_DRIVER != 1) driver.init();
      break;
    case 'speed':
      if (process.env.DISABLE_DRIVER != 1) driver.setSpeed(params[1]);
      break;
    case 'trim':
      if (process.env.DISABLE_DRIVER != 1) driver.setTrim(params[1]);
      break;
    case 'stop':
      if (process.env.DISABLE_DRIVER != 1) driver.stop();
      break;
    case 'forward':
      if (process.env.DISABLE_DRIVER != 1) driver.drive('forward');
      break;
    case 'left':
      if (process.env.DISABLE_DRIVER != 1) driver.drive('left');
      break;
    case 'right':
      if (process.env.DISABLE_DRIVER != 1) driver.drive('right');
      break;
    case 'reverse':
      if (process.env.DISABLE_DRIVER != 1) driver.drive('reverse');
      break;
    default:
      console.log("Unknown Message");
      break;
  }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET drone page. */
router.get('/drone', function (req, res, next) {
  res.render('drone', { title: 'Drone Controller' });
});

/* GET create2 page. */
router.get('/create2', function (req, res, next) {
  res.render('create2', { title: 'Create2 Controller' });
});

router.put('/speed/:value', function (req, res, next) {
  if (process.env.DISABLE_DRIVER != 1) driver.setSpeed(req.params.value)
  // console.log(req.params.value)
  next()
}, function (req, res) {
  res.send('Got a PUT request at /value')
})

router.post('/init', function (req, res, next) {
  if (process.env.DISABLE_DRIVER != 1) driver.init()
  next()
}, function (req, res) {
  res.send('Got a POST request at /init')
})

router.post('/stop', function (req, res, next) {
  if (process.env.DISABLE_DRIVER != 1) driver.stop()
  next()
}, function (req, res) {
  res.send('Got a POST request at /stop')
})

router.post('/forward', function (req, res, next) {
  if (process.env.DISABLE_DRIVER != 1) driver.drive("forward")
  next()
}, function (req, res) {
  res.send('Got a POST request at /forward')
})

router.post('/left', function (req, res, next) {
  if (process.env.DISABLE_DRIVER != 1)  driver.drive("left")
  next()
}, function (req, res) {
  res.send('Got a POST request at /left')
})

router.post('/right', function (req, res, next) {
  if (process.env.DISABLE_DRIVER != 1) driver.drive("right")
  next()
}, function (req, res) {
  res.send('Got a POST request at /right')
})

router.post('/reverse', function (req, res, next) {
  if (process.env.DISABLE_DRIVER != 1) driver.drive("reverse")
  next()
}, function (req, res) {
  res.send('Got a POST request at /reverse')
})

module.exports = router;
