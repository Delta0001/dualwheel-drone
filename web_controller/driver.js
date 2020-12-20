var rpio = require('rpio');

const GPIO12 = 32;
const GPIO13 = 33;

var speed = 100;

// Setup PWM pins
rpio.open(GPIO12, rpio.PWM);
rpio.open(GPIO13, rpio.PWM);
rpio.pwmSetClockDivider(64); // Set PWM refresh rate to 19.2MHz/64=300kHz
rpio.pwmSetRange(GPIO12, 1024); // PWM Range
rpio.pwmSetRange(GPIO13, 1024); // PWM Range

function setSpeed(speed) {
    speed = this.speed;
    console.log("speed set to " + this.speed); // debug
}

function stop() {
    rpio.pwmSetData(GPIO12, 0);
    rpio.pwmSetData(GPIO13, 0);
}

function drive(direction) {
    switch (direction) {
        case "forward":
            rpio.pwmSetData(GPIO12, speed);
            rpio.pwmSetData(GPIO13, speed);
            break;
        case "left":
            rpio.pwmSetData(GPIO12, 0);
            rpio.pwmSetData(GPIO13, speed);
            break;
        case "right":
            rpio.pwmSetData(GPIO12, speed);
            rpio.pwmSetData(GPIO13, 0);
            break;
        case "reverse":
            console.log("Not Implemented!");
            rpio.pwmSetData(GPIO12, 0);
            rpio.pwmSetData(GPIO13, 0);
            break;
        default:
            console.log("Unknown Direction");
            break;
    }
}

module.exports = { setSpeed, stop, drive };
