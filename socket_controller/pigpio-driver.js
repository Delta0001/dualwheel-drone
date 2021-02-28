var Gpio = require('pigpio').Gpio;

var trim = 0;

const MAX_THROTTLE_PW = 2000;
const MID_THROTTLE_PW = 1500 + trim;
const MIN_THROTTLE_PW = 1000;

var throttle = 0;

// Setup PWM pins
const motor1 = new Gpio(12, {mode: Gpio.OUTPUT});
const motor2 = new Gpio(13, {mode: Gpio.OUTPUT});

// new_speed is a value between 0 and 100 indicating throttle percentage
function setSpeed(new_throttle) {
    var new_throttle = (MAX_THROTTLE_PW - MID_THROTTLE_PW) * (new_throttle * 0.01);
    if (new_throttle <= MAX_THROTTLE_PW && MIN_THROTTLE_PW >= 0) {
        throttle = new_throttle;
    }
    console.log("throttle speed set to " + new_throttle); // debug
}

function setTrim(new_trim) {
    trime = new_trim;
    console.log("trim set to " + new_trim); // debug
}

function init() {
    console.log("Intiializing sequence");
    setTimeout( () => motor1.servoWrite(MID_THROTTLE_PW), 1000)
    setTimeout( () => motor2.servoWrite(MID_THROTTLE_PW), 1000)

    setTimeout( () => motor1.servoWrite(MID_THROTTLE_PW + 200), 1000)
    setTimeout( () => motor2.servoWrite(MID_THROTTLE_PW + 200), 1000)

    setTimeout( () => motor1.servoWrite(MID_THROTTLE_PW), 1000)
    setTimeout( () => motor2.servoWrite(MID_THROTTLE_PW), 1000)
}

function stop() {
    motor1.servoWrite(MID_THROTTLE_PW);
    motor2.servoWrite(MID_THROTTLE_PW);
}

function drive(direction) {
    switch (direction) {
        case "forward":
            motor1.servoWrite(MID_THROTTLE_PW + throttle);
            motor2.servoWrite(MID_THROTTLE_PW + throttle);
            break;
        case "left":
            motor1.servoWrite(MID_THROTTLE_PW + throttle);
            motor2.servoWrite(MID_THROTTLE_PW - throttle);
            break;
        case "right":
            motor1.servoWrite(MID_THROTTLE_PW - throttle);
            motor2.servoWrite(MID_THROTTLE_PW + throttle);
            break;
        case "reverse":
            motor1.servoWrite(MID_THROTTLE_PW - throttle);
            motor2.servoWrite(MID_THROTTLE_PW - throttle);
            break;
        default:
            console.log("Unknown Direction");
            break;
    }
}

module.exports = { setSpeed, setTrim, stop, drive, init };
