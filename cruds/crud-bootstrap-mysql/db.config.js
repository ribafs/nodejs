'user strict';

const mysql = require('mysql2');

//local mysql db connection
const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'testes'
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = conn;
