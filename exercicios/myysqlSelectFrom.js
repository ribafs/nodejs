var con = require('./conexao');

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM clientes", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
