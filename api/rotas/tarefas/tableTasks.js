// const Model = require('./tasks') 


// module.exports = { 

//     listar () {

//         return Model.findAll()
        
//     },
//     inserir (tarefa2) {

//         return Model.create(tarefa2)

//     },
//     async pegarPorId (id) {

//         const encontrado = await Model.findOne({

//             where: {

//                 id: id

//             }
//         })

//         if (!encontrado) {

//             throw new Error('Task não encontrada')

//         }

//         return encontrado

//     }

// }