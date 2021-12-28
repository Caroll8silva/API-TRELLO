const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const roteador = require('./rotas/tarefas')
app.use('/api/tarefas', roteador)

app.listen(config.get('api.porta'), () => console.log('A API está funcionando!'))