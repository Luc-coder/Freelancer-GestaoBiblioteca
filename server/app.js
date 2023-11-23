const express = require('express');
const app = express();

const index = require('./routes/index.js');
const sobre = require('./routes/sobre.js');
const cadastro = require('./routes/cadastro.js');
const login = require('./routes/login.js');

port = 3000;

app.use('/', index);
app.use('/sobre', sobre);
app.use('/cadastro', cadastro);
app.use('/login', login);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});