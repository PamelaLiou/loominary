//var bodyParser = require('body-parser');
var express = require("express");
var app = express();
var port2 = 8000;
var url='localhost'
var red,green,blue;
// var url='10.0.11.62'


var server = app.listen(port2);
var io = require("socket.io").listen(server);
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var port = new SerialPort("/dev/cu.usbmodemfa131", {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
}, false); 




app.use(express.static(__dirname + '/'));
console.log('Simple static server listening at '+url+':'+port2);




//socket.io stuff
io.sockets.on('connection', function (socket) {
	console.log("socket connected");



port.open(function(error) {

  if (error) {
    console.log('failed to open: ' + error);
  } else {
    // port.write("A");
    console.log('Serial open');
    port.on('data', function(data) {
    //console.log('data length: ' + data.length);
    console.log(data);
    result = data.split(',')
    red=result[0];
    blue=result[1];
    green=result[2];

     // console.log(typeof(red))


  
    // console.log(data);
    // console.log("You sent R=" + data.r + " G="+ data.g + " B="+ data.g);
    socket.emit('toScreen', { 
     // r: "1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0"
      r: result[0], g: result[1], b: result[2] 

    });     
  



    
    // port.write("A");
    });


}
  
});





  socket.on('toSerial', function (data) {
    console.log(data);
    port.write(data.r);
    //console.log("You sent R=" + data.r + " G="+ data.g + " B="+ data.g);
         

  });
});