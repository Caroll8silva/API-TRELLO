const createTable = require('../rotas/tarefas/tabelaTasks')



createTable
    .sync()
    .then(() => console.log('A tabela tarefas foi criada com sucesso'))
    .catch(console.log)

