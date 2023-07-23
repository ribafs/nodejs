var con = require('./conexao');

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/*
Criar novo user para acessar via node
mysql -uroot -proot
GRANT ALL PRIVILEGES ON *.* TO 'rootn'@'localhost' IDENTIFIED BY 'rootn';
*/
