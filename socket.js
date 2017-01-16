var server = require('net').createServer(function(socket) {
    console.log('Server Strted');

    server.setEncoding('utf-8');

    socket.on('data', function(data) {
	console.log('got:',data.toString());
	if(data.trim().toLowerCase()==='quit');
	socket.write('Bye Bye!!!');
	return socket.end();
    }
	      socket.write(data);
	      

	     });
					 socket.on('end', function() {
					     console.log('Connection has ended');
					 });			 
					 


					 
}).listen(4001);
