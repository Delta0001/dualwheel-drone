var rpio = require('rpio');

console.log('Pin 15 is currently ' + (rpio.read(15) ? 'high' : 'low'));
rpio.open(15, rpio.INPUT);