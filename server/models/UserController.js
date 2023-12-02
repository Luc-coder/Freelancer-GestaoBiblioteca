//config
const Sequelize = require("sequelize");

//importacao
const db = require('../db/db.js');

//criador e gerenciador da tabela
const UserController = db.define('user', {
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
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//criador e gerenciador da tabela
UserController.sync();

//exportacao
module.exports = UserController;