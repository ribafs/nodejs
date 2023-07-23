var http = require('http');
var dt = require('./meuModulo');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("A data e hora atuais são: " + dt.meuModulo());
  res.end();
}).listen(3000); 
