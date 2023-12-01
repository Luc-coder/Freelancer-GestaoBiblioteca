//config
const express = require('express');
const app = express();
const path = require('path');
port = 3000;

//css
app.use(express.static(path.join(__dirname, '../client')));

//importacao rotas
const login = require('./routes/login.js');

//rotas
app.use('/', login);


//inicializador
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});