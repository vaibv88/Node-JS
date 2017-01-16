var event = require('events');

var em = new event.EventEmitter();

em.on('someEvent',function(mssg)  {

    console.log(mssg);

});

em.emit('someEvent','Hello there i created the event emitter');

listeners(em);
