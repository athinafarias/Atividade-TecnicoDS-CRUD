const Sequelize = require('sequelize');
//Carrega a dependência do Sequelize;

//Inicializa um novo objeto usando o construtor que espera a configuração do banco;
const sequelize = new Sequelize({
    dialect: 'sqlite',
    //Indica a linguagem a ser usada;
    storage: './database.sqlite'
    //E o local onde nosso banco será salvo;
}) 

module.exports = sequelize;
//Exportamos a instância do Sequelize para que possa ser utilizada em outros arquivos do projeto.