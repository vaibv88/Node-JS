var connect = require('connect');

var http = require('http');

var app = connect();

var square = require('./squareMiddleware.js');
app.use(square(5));

http.createServer(app().listen(8888, function(){console.log('Server has Started');}));
