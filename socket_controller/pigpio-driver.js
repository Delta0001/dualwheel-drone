var Gpio = require('pigpio').Gpio;

var throttle_pw = 0;

const MAX_THROTTLE_PW = 2000;
const MID_THROTTLE_PW = 1500;
const MIN_THROTTLE_PW = 1000;

var trimmed_mid_throttle_pw = MID_THROTTLE_PW;

// Setup PWM pins
const motor1 = new Gpio(12, {mode: Gpio.OUTPUT});
const motor2 = new Gpio(13, {mode: Gpio.OUTPUT});

// new_speed is a value between 0 and 100 indicating throttle percentage
function setSpeed(new_throttle) {
    var pulse_width = (MAX_THROTTLE_PW - MIN_THROTTLE_PW) * (new_throttle * 0.01);
    // if (new_throttle <= 5) {
    //     throttle_pw = 0;
    // } else 
    if (pulse_width <= MAX_THROTTLE_PW && pulse_width >= MIN_THROTTLE_PW) {
        throttle_pw = pulse_width;
    }
    console.log("throttle speed set to " + pulse_width); // DEBUG
}

// Closest trim value I could set was -22 with 5% minimum speed
function setTrim(trim) {
    trimmed_mid_throttle_pw = MID_THROTTLE_PW + parseInt(trim);
    console.log("trim set to " + trim); // DEBUG
}

function init() {
    console.log("Intiializing sequence");
    setTimeout( () => motor1.servoWrite(trimmed_mid_throttle_pw), 1000)
    setTimeout( () => motor2.servoWrite(trimmed_mid_throttle_pw), 1000)

    setTimeout( () => motor1.servoWrite(trimmed_mid_throttle_pw + 200), 1000)
    setTimeout( () => motor2.servoWrite(trimmed_mid_throttle_pw + 200), 1000)

    setTimeout( () => motor1.servoWrite(trimmed_mid_throttle_pw), 1000)
    setTimeout( () => motor2.servoWrite(trimmed_mid_throttle_pw), 1000)
}

function stop() {
    motor1.servoWrite(trimmed_mid_throttle_pw);
    motor2.servoWrite(trimmed_mid_throttle_pw);
}

function drive(direction) {
    switch (direction) {
        case "forward":
            console.log(trimmed_mid_throttle_pw); // DEBUG
            console.log(throttle_pw); // DEBUG
            motor1.servoWrite(trimmed_mid_throttle_pw + throttle_pw);
            motor2.servoWrite(trimmed_mid_throttle_pw + throttle_pw);
            break;
        case "left":
            motor1.servoWrite(trimmed_mid_throttle_pw + throttle_pw);
            motor2.servoWrite(trimmed_mid_throttle_pw - throttle_pw);
            break;
        case "right":
            motor1.servoWrite(trimmed_mid_throttle_pw - throttle_pw);
            motor2.servoWrite(trimmed_mid_throttle_pw + throttle_pw);
            break;
        case "reverse":
            motor1.servoWrite(trimmed_mid_throttle_pw - throttle_pw);
            motor2.servoWrite(trimmed_mid_throttle_pw - throttle_pw);
            break;
        default:
            console.log("Unknown Direction");
            break;
    }
}

module.exports = { setSpeed, setTrim, stop, drive, init };
