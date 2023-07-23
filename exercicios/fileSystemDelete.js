var fs = require('fs');

fs.unlink('apagar.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); 
