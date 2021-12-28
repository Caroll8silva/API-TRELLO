const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const tasks = {
    id: {
        
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true

    },

    title: {

        type: Sequelize.STRING,
        allowNull: false

    },

    description: {
        type: Sequelize.STRING,
        allowNull: false
    }, 

    task: [{

        type: Sequelize.STRING,
        allowNull: false

        
    }]
}

const configTable = {
    freezeTableName: true,
    tableName: 'Tarefas',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updateAt'
}

module.exports = instancia.define('tarefas', tasks, configTable)