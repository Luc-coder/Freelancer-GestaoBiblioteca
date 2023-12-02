//config
const Sequelize = require("sequelize");

//impotacao
const db = require('../db/db.js');

//criador e gerenciador da tabela
const Book = db.define('book', {
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
        type: Sequelize.DATE,
        allowNull: false,
    },
    editora: {
        type: Sequelize.STRING,
        allowNull: false,
    }

});

//criador e gerenciador da tabela
Book.sync();

//exportacao
module.exports = Book;