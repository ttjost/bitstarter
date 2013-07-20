var fs = require('fs');

var string = fs.readFileSync("index.html");
var buf  = new Buffer(string);
string  = buf.toString(buf);

console.log(string);
