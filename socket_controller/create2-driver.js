create = require('create2')
chalk = require('chalk');


// create.debug = true;
create.open("COM4", main);
// create.prompt(main)

function main(robot) {
    console.log(robot.data)

    console.log("Reset")
    setTimeout( () => robot.reset(), 1000)

    console.log("Safe Mode")
    setTimeout( () => robot.safe(), 1000)

    let chg = robot.data.charge/robot.data.maxCharge;
    robot.setLeds(null, null, null, null, 255-(chg*255), 255);
    console.log(robot.data.maxCharge)

    // console.log("Clean Mode")
    // robot.clean()
    setTimeout( () => robot.clean(), 1000)

    robot.setSong(0, [[72,32],[76,32],[79,32],[72,32]]);
    
    // console.log("Close Communication")
    // robot.close()
    // setInterval(() => {
	// 	//Set LEDs based on battery level:
	// 	robot.setLeds(null,null,null,null,255-(chg*255),255);
	// 	//Print sensor data:
	// 	// if(input != 1) return;
	// 	// let s = chalk.yellow("> Input {"), k = Object.keys(robot.data);
	// 	// for(let i=0,l=k.length,n; i<l; i++) {
	// 	// 	n=k[i]; s += (i?chalk.yellow(", "):'')+chalk.cyan(n+": ")+chalk.yellow(robot.data[n]);
	// 	// }
	// 	// console.log(s+chalk.yellow("}"));
	// }, 500);



}

// Serial = require('serialport')
// Serial.list().then(
//   ports => ports.forEach(console.log),
//   err => console.error(err)
// )
// console.log(Serial.list())
// console.log(Serial.list())
// console.log(Serial.list())