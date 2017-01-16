
var event = require('events');
var emt = new event.EventEmitter();

emt.on('emitOne', function() {

    console.log("Emitter One has started");

});


emt.on('emitTwo', function() {

    console.log("Emmitter Two has started");
});


emt.emit('emitOne');
emt.emit('emitTwo');
