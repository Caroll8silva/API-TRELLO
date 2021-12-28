const roteador = require('express').Router()
const tableTarefa = require('./tableTarefa')
const modelTabelaTask = require('./tableTarefa')
const classTarefa = require('./classTarefa')
const tableTasks = require('./tableTasks')
const modelTask = require('./tableTasks')
const classTasks = require('./classTasks')

roteador.get('/', async (requisicao, resposta) => {
    const resultados = await tableTarefa.listar()
    resposta.status(200)
    resposta.send(
        JSON.stringify(resultados)
    )
})



roteador.get('/', async (requisicao, resposta) => {
    const resultados = await modelTabelaTask.listar()
    resposta.send(
        JSON.stringify(resultados)
    )
})



roteador.post('/', async (requisicao, resposta) => {

    try {

        const dadosRecebidos = requisicao.body
        const tarefa = new classTarefa(dadosRecebidos)
        await tarefa.criar()
        resposta.status(201)
        resposta.send(
            JSON.stringify(tarefa)
        )

    } catch (erro) {
        resposta.status(400)
        resposta.send(
            JSON.stringify({

                mensagem: erro.message

            })
        )

    }

})




roteador.get('/:idclassTarefa', async (requisicao, resposta) => {
    try {

        const id = requisicao.params.idclassTarefa
        const tarefa = new classTarefa({
            id: id
        })
        await tarefa.carregar()
        resposta.status(200)
        resposta.send(

            JSON.stringify(tarefa)
        )

    } catch (erro) {
        resposta.status(404)
        resposta.send(

            JSON.stringify({
                mensagem: erro.mensagem
            })
        )

    }
})


roteador.put('/:idclassTarefa', async (requisicao, resposta) => {

    try {

        const id = requisicao.params.idclassTarefa
        const dadosRecebidos = requisicao.body
        const dados = Object.assign({}, dadosRecebidos, {
            id: id
        })
        const tarefa = new classTarefa(dados)
        await tarefa.atualizar()
        resposta.status(204)
        resposta.end()


    } catch (erro) {
        resposta.status(400)
        resposta.send(
            JSON.stringify({

                mensagem: erro.message
            })
        )

    }
})

roteador.delete('/:idclassTarefa', async (requisicao, resposta) => {

    try {
        const id = requisicao.params.idclassTarefa
        const tarefa = new classTarefa({
            id: id
        })
        await tarefa.carregar()
        await tarefa.remover()
        resposta.status(204)
        resposta.end()
    } catch (erro) {
        resposta.status(404)
        resposta.send(
            JSON.stringify({

                mensagem: erro.message
            })

        )

    }

})

module.exports = roteador