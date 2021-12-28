const tableTasks = require('./tableTasks')

class classTasks {

    constructor ({ id, title, taskRelevance, completed, createdAt, updateAt, task}) {

        this.id = id
        this.title = title
        this.taskRelevance = taskRelevance
        this.completed = completed
        this.createdAt = createdAt
        this.updateAt = updateAt
        this.task = task

    }

    async criar () {

        const resultado = await tableTasks.inserir({

            title: this.title,
            taskRelevance: this.taskRelevance,
            completed: this.completed,
            task: this.task

        })

        this.id = resultado.id
        this.createdAt = resultado.createdAt
        this.updateAt = resultado.updateAt

    }
     async carregar() {

       const taskEncontrada = await tableTasks.pegarPorId
         (this.id)
         this.title = taskEncontrada.title
         this.taskRelevance = taskEncontrada.taskRelevance
         this.completed = taskEncontrada.completed
         this.updateAt = taskEncontrada.updateAt
         this.createdAt = taskEncontrada.createdAt
         this.task = taskEncontrada.task
     }

}

module.exports = classTasks