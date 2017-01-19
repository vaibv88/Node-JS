var http = require('http');

var options = {
    host :"www.google.com",
    port:80,
    path:'/index.html',
    method:"post"
};

http.get(options , function(res) {
    console.log("Status code is:", +res.statusCode);
    console.log("Headers: ",res.headers);
    console.log("Version",res.httpVersion);

});
