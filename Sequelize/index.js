const Sequelize = require('sequelize')
const sequelize = new Sequelize('testes', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
})
/*
// Definir model/tabela postagens
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
*/
// Definir model/tabela postagens
const Usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Forçar a geração da tabela
Usuarios.sync({force: true})

/*
// Testar conexão
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.log('Falha na conexão' + erro)
})
*/

// Inserir registros
/*
Postagem.create({
    titulo: "Primeira postagem",
    conteudo: 'Conteúdo de teste'
})
*/
Usuarios.create({
    nome: 'Ribamar',
    sobrenome: 'Sousa',
    idade: 65,
    email: 'ribafs'
})
