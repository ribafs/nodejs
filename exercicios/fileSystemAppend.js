var fs = require('fs');

fs.appendFile('meuFileWrite.txt', ' \nEste é o meu texto.', function (err) {
  if (err) throw err;
  console.log('Updated!');
}); 
