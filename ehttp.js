var http = require('http');

var option = {host:"www.google.com",
	      port:80,
	      path:"/upload",
	      method:"POST"
	     };
var request = http.request(option, function(response){
    console.log('Response:', request.statusCode);
    console.log('HEaders:',request.headers);
    response.setEncoding('utf-8');
    response.on('data',function(xyz){
	console.log('Data',xyz);
    });
});

request.write('This is piece of data');
request.write('This is again another piece of data');
request.end();
