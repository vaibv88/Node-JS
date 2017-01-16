var path = require('path');

var a = path.normalize('/foo/bar/quu//zzy/abc/..');
console.log(a);

var b = path.join('/foo','/bar','/quua','/hello','baz/asf');
console.log(b);


var c = path.dirname('/foo/bar/hello/sunshine/is../me.js');
console.log(c);


