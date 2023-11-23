const sequelize = require("sequelize");

const connecton = new Sequelize('database', 'root', '123456', {
    host: 'localhost',
    dialect: 'mssql'
});

connection.authenticate()
.then(()=>{
    console.log("Conexão realizada com sucesso");
}).catch(()=>{
    console.log("Erro na conexão");
});

module.exports = connecton;