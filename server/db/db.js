const Sequelize = require("sequelize");

const db = new Sequelize('biblioteca', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

// const db = new Sequelize('biblioteca', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

connection.authenticate()
.then(()=>{
    console.log("Conexão realizada com sucesso");
}).catch(()=>{
    console.log("Erro na conexão");
});

module.exports = db;