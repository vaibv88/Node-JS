var fs = require('fs');

var data = '';
var readStream = fs.createReadStream('input.js');

readStream.setEncoding('utf-8');

readStream.on('data', function(chunk) {

    data=chunk;
});

readStream.on('end',function() {
    console.log(data);
});

readStream.on('err', function(err) {
    console.error(err);
});
