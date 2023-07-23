/*

    fs.appendFile()
    fs.open()
    fs.writeFile()
*/
var fs = require('fs');

fs.appendFile('meuFileWrite.txt', 'Olá content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 
