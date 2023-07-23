/*
npm init -y
npm install upper-case
*/

var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
  console.log(res.write(uc.upperCase("Hello World!")))
}).listen(3000); 
