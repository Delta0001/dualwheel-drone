var Gpio = require('pigpio').Gpio;

var throttle = 0;

const MAX_THROTTLE_PW = 2000;
const MID_THROTTLE_PW = 1500;
const MIN_THROTTLE_PW = 1000;

var trimmed_mid_throttle = MID_THROTTLE_PW;

// Setup PWM pins
const motor1 = new Gpio(12, {mode: Gpio.OUTPUT});
const motor2 = new Gpio(13, {mode: Gpio.OUTPUT});

// new_speed is a value between 0 and 100 indicating throttle percentage
function setSpeed(new_throttle) {
    var new_throttle = (MAX_THROTTLE_PW - MID_THROTTLE_PW) * (new_throttle * 0.01);
    if (new_throttle <= 5) {
        throttle = 0;
    } else if (new_throttle <= MAX_THROTTLE_PW && new_throttle >= MIN_THROTTLE_PW) {
        throttle = new_throttle;
    }
    console.log("throttle speed set to " + new_throttle); // debug
}

// Closest trim value I could set was -22 with 5% minimum speed
function setTrim(trim) {
    trimmed_mid_throttle = MID_THROTTLE_PW + parseInt(trim);
    console.log("trim set to " + trim); // debug
}

function init() {
    console.log("Intiializing sequence");
    console.log(trimmed_mid_throttle);
    setTimeout( () => motor1.servoWrite(trimmed_mid_throttle), 1000)
    setTimeout( () => motor2.servoWrite(trimmed_mid_throttle), 1000)

    setTimeout( () => motor1.servoWrite(trimmed_mid_throttle + 200), 1000)
    setTimeout( () => motor2.servoWrite(trimmed_mid_throttle + 200), 1000)

    setTimeout( () => motor1.servoWrite(trimmed_mid_throttle), 1000)
    setTimeout( () => motor2.servoWrite(trimmed_mid_throttle), 1000)
}

function stop() {
    motor1.servoWrite(trimmed_mid_throttle);
    motor2.servoWrite(trimmed_mid_throttle);
}

function drive(direction) {
    switch (direction) {
        case "forward":
            motor1.servoWrite(trimmed_mid_throttle + throttle);
            motor2.servoWrite(trimmed_mid_throttle + throttle);
            break;
        case "left":
            motor1.servoWrite(trimmed_mid_throttle + throttle);
            motor2.servoWrite(trimmed_mid_throttle - throttle);
            break;
        case "right":
            motor1.servoWrite(trimmed_mid_throttle - throttle);
            motor2.servoWrite(trimmed_mid_throttle + throttle);
            break;
        case "reverse":
            motor1.servoWrite(trimmed_mid_throttle - throttle);
            motor2.servoWrite(trimmed_mid_throttle - throttle);
            break;
        default:
            console.log("Unknown Direction");
            break;
    }
}

module.exports = { setSpeed, setTrim, stop, drive, init };
