var EventEmitter = require('events').EventEmitter;

var getResource= function(c)  {

    var e = new EventEmitter();

    process.nextTick(function () {

	var count = 0;
	e.emit('start');

	var t = setInterval(function()  {

	    e.emit('data',count);

	    if(count===t)  {

		e.emit('end',count);

		clearInterval(t);

	    }

	},10);

    });

    return(e);
};

var r = getResource(5);

r.on('start', function() {
    console.log('Process has started');
});

r.on('data', function(data) {

    console.log('I recieved Data-->'+data);
});

r.on('end', function(t)  {
    console.log('Iam done with '+t+'events');
});

     
