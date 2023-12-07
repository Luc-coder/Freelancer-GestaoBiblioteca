//config
const express = require('express');
const atualizaLivro = express();
const path = require('path');
const bodyParser = require('body-parser');
atualizaLivro.use(bodyParser.urlencoded({ extended: true }));
atualizaLivro.set('view engine', 'ejs');
atualizaLivro.set('views', path.join(__dirname, '../views'));
// atualizaLivro.use(express.static(path.join(__dirname, "../views")));
atualizaLivro.use(express.static(path.join(__dirname, "../public")));

//importacao de controller
const LivroController = require('../models/LivroController');

//rota com lista de livros para atualizar
atualizaLivro.get('/atualizaLivro', async (req, res) => {
    try {
        const livros = await LivroController.findAll();
        res.render('atualizaLivro.ejs', { livros });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Rota para exibir o formulário de edição de livro
atualizaLivro.get('/editarLivro/:id', async (req, res) => {
    const livroId = req.params.id;
    try {
        const livro = await LivroController.findByPk(livroId);
        res.render('editarLivro.ejs', { livro });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Rota para processar a atualização do livro
atualizaLivro.post('/atualizarLivro', async (req, res) => {
    
    try {
        const livroId = req.body.id;
        // Encontre o livro pelo ID
        const livro = await LivroController.findByPk(livroId);

        //campos
        livro.id = req.body.id;
        livro.name = req.body.name;
        livro.author = req.body.author;
        livro.genero = req.body.genero;
        livro.data_publicacao = req.body.data_publicacao;
        livro.editora = req.body.editora;

        // Salve as alterações no banco de dados
        await livro.save();

        // Redirecione para a página de tabela de livros atualizada
        res.redirect('/home');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

//expostacao
module.exports = atualizaLivro;