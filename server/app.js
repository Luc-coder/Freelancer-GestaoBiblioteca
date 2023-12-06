//config
const express = require('express');
const app = express();
const path = require('path');
port = 3000;

//css
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../server/views/public')));

//importacao rotas
const login = require('./routes/login.js');
const cadastro = require('./routes/cadastro.js');
const home = require('./routes/home.js');
const cadastraLivro = require('./routes/cadastraLivro.js');
const consultaLivro = require('./routes/consultaLivro.js');
const atualizaLivro = require('./routes/atualizaLivro.js');
const deleteLivro = require('./routes/deleteLivro.js');

//rotas
app.all('/', login);
app.post('/cadastro', cadastro);
app.get('/home', home);
app.post('/cadastraLivro', cadastraLivro);
app.get('/consultaLivro', consultaLivro);
app.get('/atualizaLivro', atualizaLivro);
app.get('/editarLivro/:id', atualizaLivro);
app.post('/atualizarLivro', atualizaLivro);
app.get('/deleteLivro', deleteLivro);
app.get('/excluirLivro/:id', deleteLivro);


//inicializador
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});