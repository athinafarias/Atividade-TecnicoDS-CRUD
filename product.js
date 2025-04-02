const Sequelize = require('sequelize');
// Carrega a dependência do Sequelize
const database = require('./db');
// Carrega a dependência do nosso Banco de Dados

// Usamos a *function define* para criar o schema da nossa tabela,
// Schema é uma estrutura organizacional que define como os dados são organizados, armazenados e manipulados
const Product = database.define('product', {
    //'product' é o primeiro parâmetro: o nome que o objeto recebe, e o segundo parâmetro são as propriedades:
    id: {
        type: Sequelize.INTEGER, //Constante
        autoIncrement: true, //Modificadores
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.DOUBLE,
    },
    description: Sequelize.STRING
})

module.exports = Product;
//Exportamos para ser usado na aplicação