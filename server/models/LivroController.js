//config
const Sequelize = require("sequelize");

//importacao
const db = require('../db/db.js');

//criador e gerenciador da tabela
const LivroController = db.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_publicacao: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    editora: {
        type: Sequelize.STRING,
        allowNull: false,
    }

});

//criador e gerenciador da tabela
LivroController.sync();

//exportacao
module.exports = LivroController;