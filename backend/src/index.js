const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
/*//Caso fosse colocar o projeto em produção, qual endereço poderá acessar a aplicação */
/*app.use(cors({ 
    origin: http://exemplo.com
}));*/
app.use(cors());
app.use(express.json());
/**
 * Rota / Recurso
 */
/**
 * Métodos Http:
 * 
 * Get: Buscar/listar informação do Back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação
 * DELETE: Deletar uma informação
 */
/**Tips de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
app.use(routes);


app.listen(3333);