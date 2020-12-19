var rpio = require('rpio');

const PIN12 = 12;
const PIN13 = 13;

// Setup PWM pins
rpio.open(PIN12, rpio.PWM);
rpio.open(PIN13, rpio.PWM);
rpio.pwmSetClockDivider(64); // Set PWM refresh rate to 19.2MHz/64=300kHz
rpio.pwmSetRange(0, 1024); // PWM Range

function stop() {
    rpio.pwmSetData(PIN12, 0);
    rpio.pwmSetData(PIN13, 0);
}

function drive(direction) {
    switch (direction) {
        case "forward":
            rpio.pwmSetData(PIN12, 0);
            rpio.pwmSetData(PIN13, 0);
            break;
        case "left":
            rpio.pwmSetData(PIN12, 0);
            rpio.pwmSetData(PIN13, 50);
            break;
        case "right":
            rpio.pwmSetData(PIN12, 50);
            rpio.pwmSetData(PIN13, 0);
            break;
        case "reverse":
            console.log("Not Implemented!");
            rpio.pwmSetData(PIN12, 0);
            rpio.pwmSetData(PIN13, 0);
            break;
        default:
            console.log("Unknown Direction");
            break;
    }
}