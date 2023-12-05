//config
const express = require('express');
const cadastraLivro = express();
const bodyParser = require('body-parser');
const { parse, format } = require('date-fns');
const { utcToZonedTime } = require('date-fns-tz');
cadastraLivro.use(bodyParser.urlencoded({ extended: false }));
cadastraLivro.use(bodyParser.json());

//importacao de controller
const LivroController = require('../models/LivroController');

//rota para cadastrar
cadastraLivro.post('/cadastraLivro', (req, res) => {
    const newBook = req.body;

    //arruma hora
    const dataPublicacao = parse(newBook.data_publicacao, 'yyyy-MM-dd', new Date());
    const dataPublicacaoLocal = utcToZonedTime(dataPublicacao, 'America/Sao_Paulo');
    newBook.data_publicacao = format(dataPublicacaoLocal, 'yyyy-MM-dd HH:mm:ss');

    //cadastra o livro
    LivroController.create(newBook)
    .then( () => {
        return res.redirect('/home');
    })
    .catch( (error) => {
        console.error('Erro ao cadastrar livro:', error);
        res.send('Erro no servidor' + error);
    });
});

//expostacao
module.exports = cadastraLivro;