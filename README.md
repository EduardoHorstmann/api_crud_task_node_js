# api_crud_task_node_js
Esta API foi desenvolvida para a criação de uma aplicação que realize as operações CRUD (Create, Read, Update, Delete) em uma coleção de tarefas (Tasks). Além disso, a API conta com a funcionalidade de importação em massa de tarefas através de um arquivo CSV.A API foi desenvolvida em Node.js sem o uso de frameworks de tasks, utilizando o módulo csv-parse para realizar a leitura do arquivo CSV por meio de streams.

Pré-requisitos:
Antes de executar a API, certifique-se de ter o Node.js instalado em sua máquina e instale a lib csv-parse (npm i csv-parse).

Instalação:
Clone este repositório para sua máquina local. Navegue até o diretório do projeto no terminal. Instale as dependências do projeto com o comando npm install. Executando a API Para executar a API, use o comando npm start. A API será executada na porta 3335.

Endpoints A API oferece os seguintes endpoints:

GET /tasks 
Retorna todas as tasks cadastradas. A requisição pode ser feita sem nenhum parâmetro, ou com os parâmetros title e/ou description através da query (search) para filtrar as tarefas pelo título e/ou descrição.

POST /tasks 
Cria uma nova task com os dados fornecidos no corpo da solicitação contendo os campos title e description.

PUT /tasks/:id 
Atualiza os dados da task com o ID fornecido. A requisição deve ser feita com o corpo da mensagem (body) contendo os campos title e/ou description.

DELETE /tasks/:id 
Exclui a task com o ID fornecido.

PATCH /tasks/:id Marca ou desmarca uma task como concluída.

Para a execução da importação de um arquivo csv deve ser executado o sequinte comando no terminal 'node streams/import-csv.js', após a execução desse comando todas as tasks que estiverem dentro do arquivo tasks.csv serão importadas.
