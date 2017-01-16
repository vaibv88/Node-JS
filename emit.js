var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected()  {

    console.log("Connection Successful");

    eventEmitter.emit('data_recieved');

}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_recieved', function(){

    console.log('Data Recieved Successfully')});

eventEmitter.emit('connection');

console.log('Program Ended');
