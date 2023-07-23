//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use express
const exp = express();
// Import connection
const conn = require('./db.config');

//set views file
exp.set('views', path.join(__dirname, 'views'));
//set view engine
exp.set('view engine', 'hbs');
exp.use(bodyParser.json());
exp.use(bodyParser.urlencoded({extended: false}));
//set folder public as static folder for static file
exp.use('/assets', express.static(__dirname + '/public'));

//route for homepage
exp.get('/', (req, res) => {
    let sql = "SELECT * FROM produto";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('produto_view', {
            results: results
        });
    });
});

//route for insert data
exp.post('/save', (req, res) => {
    let data = {produto_nome: req.body.produto_nome, produto_preco: req.body.produto_preco};
    let sql = "INSERT INTO produto SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

//route for update data
exp.post('/update', (req, res) => {
    let sql = "UPDATE produto SET produto_nome='" + req.body.produto_nome + "', produto_preco='" + req.body.produto_preco + "' WHERE produto_id=" + req.body.produto_id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

//route for delete data
exp.post('/delete', (req, res) => {
    let sql = "DELETE FROM produto WHERE produto_id=" + req.body.produto_id + "";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

//server listening
exp.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
});
