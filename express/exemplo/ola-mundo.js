// npm i express

const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Servidor pronto')) // Mostra esta mensagem no console
