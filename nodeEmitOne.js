var event = require("events");

var eventEmitter = new event.EventEmitter();


eventEmitter.on('emitone', function() {

    console.log('emitOne event catched');

});

eventEmitter.emit('emitone');


