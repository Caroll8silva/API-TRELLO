const tableTarefa = require('./tableTarefa')

class classTarefa {

    constructor ({ id, title, description, createdAt, updateAt, task}) {

        this.id = id
        this.title = title
        this.description = description
        this.createdAt = createdAt
        this.updateAt = updateAt
        this.task = task

    }

    async criar () {
        
        const resultado = await tableTarefa.inserir({

            title: this.title,
            description: this.description,
            task: this.task

        })

        this.id = resultado.id
        this.createdAt = resultado.createdAt
        this.updateAt = resultado.updateAt 

    }

    async carregar() {

        const tarefaEncontrada = await tableTarefa.pegarPorId
        (this.id)
        this.title = tarefaEncontrada.title
        this.description = tarefaEncontrada.description
        this.createdAt = tarefaEncontrada.createdAt
        this.updateAt = tarefaEncontrada.updateAt
        this.task = tarefaEncontrada.task
        
    }

    async atualizar () {

      await tableTarefa.pegarPorId(this.id)
      const campos = ['title', 'description', 'task']
      const dadosParaAtualizar = {}

      campos.forEach((campo) => {

        const valor = this[campo]
        if (typeof valor ==='string' && valor.length > 0) {

            dadosParaAtualizar[campo] = valor
        }

      })

      if(Object.keys(dadosParaAtualizar).length === 0) {

            throw new Error('Não foram fornecidos dados para atualizar!')
      }

      await tableTarefa.atualizar(this.id, dadosParaAtualizar)
    }

    remover() {

       return tableTarefa.remover(this.id)

    }

    
}

module.exports = classTarefa