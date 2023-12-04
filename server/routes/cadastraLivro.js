//config
const express = require('express');
const cadastraLivro = express();
const bodyParser = require('body-parser');
cadastraLivro.use(bodyParser.urlencoded({ extended: false }));
cadastraLivro.use(bodyParser.json());

//importacao de controller
const LivroController = require('../models/LivroController');

//rota
cadastraLivro.post('/cadastraLivro', (req, res) => {
    const newBook = req.body;

    LivroController.create(newBook)
    .then( () => {
        return res.redirect('/home');
    })
    .catch( (error) => {
        console.error('Erro ao cadastrar livro:', error);
        res.send('Erro no servidor' + error);
    })
});

module.exports = cadastraLivro;