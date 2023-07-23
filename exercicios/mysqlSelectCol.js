var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "meubanco"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT nome, endereco FROM clientes", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
