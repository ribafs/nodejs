/*
Common use for the File System module:

    Read files
    Create files
    Update files
    Delete files
    Rename files
*/
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('fileRead.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000); 
