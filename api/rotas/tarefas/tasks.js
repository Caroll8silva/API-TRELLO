const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const task = {
    title: {
        
        type: Sequelize.STRING,
        allowNull: false   

    },

    taskRelevance: {

        type: Sequelize.STRING,
        allowNull: false 

    },

    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }, 

    task: [{

        type: Sequelize.INTEGER,
        allowNull: false,
        references: {

            model: require('../tarefas/tabelaTasks'),
            key: 'id'
      
        }
    }]
}

const configTable2 = {
    freezeTableName: true,
    tableName: 'tasks',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updateAt'
    
}

module.exports = instancia.define('tarefas', task, configTable2)