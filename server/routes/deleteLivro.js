//config
const express = require('express');
const deleteLivro = express();
const path = require('path');
deleteLivro.set('view engine', 'ejs');
deleteLivro.set('views', path.join(__dirname, '../views'));
// deleteLivro.use(express.static(path.join(__dirname, "../views")));
deleteLivro.use(express.static(path.join(__dirname, '../public')));

//importacao de controller
const LivroController = require('../models/LivroController');

//renderiza a atabela com a opcao de excluir
deleteLivro.get('/deleteLivro', async (req, res) => {
    try {
        const livros = await LivroController.findAll();
        res.render('deleteLivro.ejs', { livros });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

//exclui o livro selecionado na tabela
deleteLivro.get('/excluirLivro/:id', async (req, res) => {
    const livroId = req.params.id;

    try {
        await LivroController.destroy({
            where: {
                id: livroId
            }
        });

        res.redirect('/deleteLivro');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

//exportacao
module.exports = deleteLivro;