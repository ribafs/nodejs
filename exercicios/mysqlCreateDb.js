var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "rootn",
  password: "rootn"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE meubanco", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
