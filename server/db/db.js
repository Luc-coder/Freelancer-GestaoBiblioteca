const { sequelize } = require("sequelize");

const sequelize = new Sequelize('database', 'root', '123456', {
    host: 'localhost',
    dialect: 'mssql'
});

module.exports = sequelize;