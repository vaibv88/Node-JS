var connect = require('connect');

var http = require('http');

var app = connect();

var replyIN = require('./connectMIDDLEHttpServer.js')
app.use(replyIN('Hello there m back again'));

http.createServer(app).listen(8888,function(){console.log('Server has started');});
