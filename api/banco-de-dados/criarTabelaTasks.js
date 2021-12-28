 const createTableTask = require('../rotas/tarefas/tasks')

 createTableTask
     .sync()
     .then(() => console.log('A tabela tasks foi criada com sucesso'))
     .catch(console.log)