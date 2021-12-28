const Model = require('./tabelaTasks') 


module.exports = { 

    listar () {

        return Model.findAll()
        
    },
    inserir (tarefa) {

        return Model.create(tarefa) 

    },
     async pegarPorId (id) {

        const encontrado = await Model.findOne({

            where: {

                id: id

            }
        })

        if (!encontrado) {

            throw new Error('Tarefa não encontrada')

        }

        return encontrado

    },

    atualizar (id, dadosParaAtualizar) {

        return Model.update(

            dadosParaAtualizar,
            {
                where: { id: id}
            }

        )

    },

    remover (id) {

        return Model.destroy({

            where: { id: id }
        })

    }
}