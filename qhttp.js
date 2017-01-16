var http = require('http').createServer(function (req, res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    var buf = new Buffer('Hello I m from Buffer\n');
    res.write(buf);
    res.end('Hello All I am back Again');

}).listen(8888);
