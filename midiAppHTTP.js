var connect = require('connect');
var http = require('http');

var app = connect();
var helloworld = require('./middlewareHTTP');




http.createServer(helloworld).listen(8888, function(){
    console.log('server has started');
    console.log('waiting for request');
});


