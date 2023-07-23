/*
Insert a record in the "customers" table, and return the ID:
*/
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "meubanco"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO clientes (nome, endereco) VALUES ('Michelle', 'Blue Village 1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});
