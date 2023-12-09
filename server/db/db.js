//config
const Sequelize = require("sequelize");

//conexao co o banco de dados
const db = new Sequelize('biblioteca', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// const db = new Sequelize('biblioteca', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

//verifica conexao com o banco de dados
db.authenticate()
.then(()=>{
    console.log("Conexão realizada com sucesso");
}).catch(()=>{
    console.log("Erro na conexão");
});

//exportacao
module.exports = db;