var fs = require('fs');
fs.open('/home/durga/strings.js','a',function(err, fd){
    if(err){throw err;}
    var bufferWrite = new Buffer('I again want to write this');
    var bufferPosition = 0;
    var bufferLength = bufferWrite.length;
    var filePosition = null;

    fs.write(fd, bufferWrite,bufferPosition,bufferLength,filePosition, function written(err,written){
	if(err){throw err;}
	console.log('Written data is'+written+'bytes');

    });

});
