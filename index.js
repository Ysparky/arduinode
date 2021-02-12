const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('COM6', { baudRate: 9600 });

const parser = new Readline({ delimiter: "\n" });
port.pipe(parser);

// read data  
parser.on('data', (data) => {
    console.log(data);
});

// write data
setTimeout(function () {
    port.write("L-01 02 03\n");
}, 2000);
