var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');
 
// display user page
router.get('/', function(req, res, next) {      
    dbConn.query('SELECT * FROM usuarios ORDER BY id desc',function(err,rows)     {
        if(err) {
            req.flash('error', err);
            // render to views/usuarios/index.ejs
            res.render('usuarios',{data:''});   
        } else {
            // render to views/usuarios/index.ejs
            res.render('usuarios',{data:rows});
        }
    });
});

// display add user page
router.get('/add', function(req, res, next) {    
    // render to add.ejs
    res.render('usuarios/add', {
        nome: '',
        email: '',
        posicao:''
    })
})

// add a new user
router.post('/add', function(req, res, next) {    

    let nome = req.body.nome;
    let email = req.body.email;
    let posicao = req.body.posicao;
    let errors = false;

    if(nome.length === 0 || email.length === 0 || posicao === 0) {
        errors = true;

        // set flash message
        req.flash('error', "Please enter name and email and position");
        // render to add.ejs with flash message
        res.render('usuarios/add', {
            nome: nome,
            email: email,
            posicao:posicao
        })
    }

    // if no error
    if(!errors) {

        var form_data = {
            nome: nome,
            email: email,
            posicao:posicao
        }
        
        // insert query
        dbConn.query('INSERT INTO usuarios SET ?', form_data, function(err, result) {
            //if(err) throw err
            if (err) {
                req.flash('error', err)
                 
                // render to add.ejs
                res.render('usuarios/add', {
                    nome: form_data.nome,
                    email: form_data.email,
                    posicao:form_data.posicao
                })
            } else {                
                req.flash('success', 'User successfully added');
                res.redirect('/usuarios');
            }
        })
    }
})

// display edit user page
router.get('/edit/(:id)', function(req, res, next) {

    let id = req.params.id;
   
    dbConn.query('SELECT * FROM usuarios WHERE id = ' + id, function(err, rows, fields) {
        if(err) throw err
         
        // if user not found
        if (rows.length <= 0) {
            req.flash('error', 'User not found with id = ' + id)
            res.redirect('/usuarios')
        }
        // if user found
        else {
            // render to edit.ejs
            res.render('usuarios/edit', {
                title: 'Editar User', 
                id: rows[0].id,
                nome: rows[0].nome,
                email: rows[0].email,
                posicao: rows[0].posicao
            })
        }
    })
})

// update user data
router.post('/update/:id', function(req, res, next) {

    let id = req.params.id;
    let nome = req.body.nome;
    let email = req.body.email;
    let posicao = req.body.posicao;
    let errors = false;

    if(nome.length === 0 || email.length === 0 || posicao.length === 0) {
        errors = true;
        
        // set flash message
        req.flash('error', "Please enter name and email and position");
        // render to add.ejs with flash message
        res.render('usuarios/edit', {
            id: req.params.id,
            nome: nome,
            email: email,
            posicao:posicao
        })
    }

    // if no error
    if( !errors ) {   
 
        var form_data = {
            nome: nome,
            email: email,
            posicao:posicao
        }
        // update query
        dbConn.query('UPDATE usuarios SET ? WHERE id = ' + id, form_data, function(err, result) {
            //if(err) throw err
            if (err) {
                // set flash message
                req.flash('error', err)
                // render to edit.ejs
                res.render('usuarios/edit', {
                    id: req.params.id,
                    nome: form_data.nome,
                    email: form_data.email,
                    posicao: form_data.posicao
                })
            } else {
                req.flash('success', 'User successfully updated');
                res.redirect('/usuarios');
            }
        })
    }
})
   
// delete user
router.get('/delete/(:id)', function(req, res, next) {

    let id = req.params.id;
     
    dbConn.query('DELETE FROM usuarios WHERE id = ' + id, function(err, result) {
        //if(err) throw err
        if (err) {
            // set flash message
            req.flash('error', err)
            // redirect to user page
            res.redirect('/usuarios')
        } else {
            // set flash message
            req.flash('success', 'User successfully deleted! ID = ' + id)
            // redirect to user page
            res.redirect('/usuarios')
        }
    })
})

module.exports = router;
