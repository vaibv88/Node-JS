var fs = require('fs');

fs.open('/home/durga/strings.js','r', function opened(err, fd) {

    if(err){throw err;}

    var readBuffer = new Buffer(1024);
    bufferOffset = 0;
    bufferLength = readBuffer.length;
    fileposition =100;

    fs.read(fd,
	    readBuffer,
	    bufferOffset,
	    bufferLength,
	    fileposition,
	    function read(err, readBytes){

		if(err){throw err;}
		console.log('just read'+readBytes+'Bytes');
		if(readBytes>0) {
		    console.log(readBuffer.slice(0,readBytes));
		}
	    });

});
