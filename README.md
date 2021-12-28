# API-TRELLO :page_facing_up:

## API semelhante a um bloco de notas, onde é possível:

- Criar    <br>
- Editar   <br>
- Listar   <br>
- Excluir 

## 📋 Pré-requisitos

- node.js
- npm
- mysql Workbansh
- postman

bibliotecas
- express
- body-parser
- sequelize
- mysql2
- config

## Como utilizar a API

1 - Instale todos os pré-requisitos e bibliotecas no seu terminal

![1e2](https://user-images.githubusercontent.com/63256085/147520211-f68d8bdf-8206-4967-8b74-9f268a1d3182.png)


2- Acesse o arquivo \API_Projeto\config\default.JSON, adicione os dados para o seu banco de dados e conecte ele a API 

![3](https://user-images.githubusercontent.com/63256085/147520427-360ee304-d6ab-4310-81c9-dbc0dd548a03.PNG)


3- Após conectar seu banco de dados com a API vamos criar as tabelas no seu banco de dados. Execute os seguintes arquivos com o node para a criação das tabelas: 

![4e5](https://user-images.githubusercontent.com/63256085/147520620-12fae81f-3b11-4a6f-9010-9b43a3aeb84f.png)

4- Com as tabelas criadas vamos adicionar informações dentro delas. Abra o postman e coloque o seguinte URL no método POST:

![6](https://user-images.githubusercontent.com/63256085/147520746-aed4694a-546f-4371-9832-61f2b8d487fa.PNG)

5- Após isso coloque os dados da sua task no Body

![7](https://user-images.githubusercontent.com/63256085/147520810-1d345452-9858-4a6b-9d3d-8a13835ba2c4.PNG)

6- Agora para listar suas tasks basta trocar o método POST pelo método GET. Caso queira listar uma task especifica basta adicionar o número da ID da Task na URL, ex: localhost:3000/api/tarefas/5

![8](https://user-images.githubusercontent.com/63256085/147520874-ee3e4219-92ed-43f7-8fc9-e87226e9d884.PNG)

7- Para atualizar uma informação na sua Task basta trocar o método para PUT, adicionar a ID da task na URL e adicionar no body o campo que deseja trocar.

![9](https://user-images.githubusercontent.com/63256085/147520943-b791ed2e-853c-4d71-ac8e-20a907307333.PNG)

8- E por ultimo, para deletar uma Task basta você trocar o método para DELETE e informar na URL o ID da task que deseja excluir.

![10](https://user-images.githubusercontent.com/63256085/147520955-f564c689-6372-44ab-abe8-7e710d25a7a1.PNG)

