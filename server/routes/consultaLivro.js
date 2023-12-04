//config
const express = require('express');
const consultaLivro = express();
const path = require('path');
consultaLivro.set('view engine', 'ejs');
consultaLivro.set('views', path.join(__dirname, '../views'));
consultaLivro.use(express.static(path.join(__dirname, "../views")));

//importacao de controller
const LivroController = require('../models/LivroController');

//rota
consultaLivro.get('/consultaLivro', async (req, res) => {
    LivroController.findAll()
    .then( books => {
        res.render('consultaLivro', { books });
    })
    .catch( (error) => {
        console.error('Erro ao buscar livros:', error);
        res.send('Erro no servidor' + error);
    });
    
});

//exportacao
module.exports = consultaLivro;