# api_crud_task_node_js
API CRUD de Tasks Este é um exemplo de API de CRUD (Create, Read, Update, Delete) de tasks utilizando Node.js sem nenhum framework.

Pré-requisitos Antes de executar a API, certifique-se de ter o Node.js instalado em sua máquina.

Instalação Clone este repositório para sua máquina local. Navegue até o diretório do projeto no terminal. Instale as dependências do projeto com o comando npm install. Executando a API Para executar a API, use o comando npm start. A API será executada na porta 3335.

Endpoints A API oferece os seguintes endpoints:

GET /tasks 
Retorna todas as tasks cadastradas.

GET /tasks/:id 
Retorna a task com o ID fornecido.

POST /tasks 
Cria uma nova task com os dados fornecidos no corpo da solicitação.

PUT /tasks/:id 
Atualiza os dados da task com o ID fornecido.

DELETE /tasks/:id 
Exclui a task com o ID fornecido.

Modelo da task Uma task consiste em um objeto com os seguintes atributos:

id (número): identificador único da task. title (string): título da task. description (string): descrição da task. completed (boolean): indica se a task foi concluída ou não. Exemplo de uma task:
