var http = require("http");

http.createServer(function (req,res)  {

    res.writeHead(200,{'content/type':'text/plain'});
    res.write("Hello world node is coming to You");

    res.end();

}).listen(8888);

console.log("The server has been stared and looking at 8888");

