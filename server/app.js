//config
const express = require('express');
const app = express();
const path = require('path');
port = 3000;

//css
app.use(express.static(path.join(__dirname, '../client')));

//importacao rotas
const login = require('./routes/login.js');
const cadastro = require('./routes/cadastro.js');
const home = require('./routes/home.js');

//rotas
app.all('/', login);
// app.post('/', login);
app.post('/cadastro', cadastro);
app.get('/home', home);


//inicializador
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});