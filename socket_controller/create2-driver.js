create = require('create2')


create.debug = true;
create.open("COM4");
create.prompt(main)


function main(r) {
    console.log(r)
}

// Serial = require('serialport')
// Serial.list().then(
//   ports => ports.forEach(console.log),
//   err => console.error(err)
// )
// console.log(Serial.list())
// console.log(Serial.list())
// console.log(Serial.list())