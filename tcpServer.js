var server = require('net').createServer();

var port = 4001;
server.on('listening', function() {
    console.log('Server is listening to port',port);
});

server.on('connection', function(socket) {
    console.log('server has new connection');
    socket.end();
    server.close();
    
});

server.on('close', function() {
    console.log('Server has closed');
});

server.on('error', function(err) {
    console.log('Error Occurred',err.message);
});


server.listen(port);
