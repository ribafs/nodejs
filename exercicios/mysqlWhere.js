var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "meubanco"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM clientes WHERE endereco = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
