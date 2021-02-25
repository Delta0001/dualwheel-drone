var Gpio = require('pigpio').Gpio;

const MAX_THROTTLE_PW = 2000;
const MID_THROTTLE_PW = 1500;
const MIN_THROTTLE_PW = 1000;

var throttle = MID_THROTTLE_PW;

// Setup PWM pins
const motor1 = new Gpio(12, {mode: Gpio.OUTPUT});
const motor2 = new Gpio(13, {mode: Gpio.OUTPUT});

// new_speed is a value between 0 and 100 indicating throttle percentage
function setSpeed(new_speed) {
    var new_throttle = (MAX_THROTTLE_PW - MID_THROTTLE_PW) * (newspeed * 0.01);
    if (new_speed <= MAX_THROTTLE_PW && MIN_THROTTLE_PW >= 0) {
        console.log("speed set to " + new_speed); // debug
        throttle = new_throttle;
    }
    console.log("global speed set to " + speed); // debug
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

module.exports = { setSpeed, stop, drive };
