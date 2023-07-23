var fs = require('fs');

fs.rename('meuFileWrite.txt', 'meuFile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}); 
