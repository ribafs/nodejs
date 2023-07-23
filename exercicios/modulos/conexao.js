// Módulo para conexão a ser importado pelos vários arquivos. Exemplo em mysql.js, myysqlSelectFrom.js

 // connection.js
    var mysql = require('mysql');

    module.exports = con = mysql.createConnection({
          host: process.env.DBHost || 'localhost',
          port: process.env.DBPort || 3306,
          user: process.env.DBUser || 'root',
          password: process.env.DBPassword || 'root',
          database: process.env.DBName || 'meubanco',
      });

