const express = require("express");
const cadastro = express();

const path = require("path");

cadastro.use(express.static(path.join(__dirname, '../../client')));

cadastro.post('/cadastro', (req, res) => {

    const newUser = req.body;

    UserController.findOne({ where: { email: newUser.email} } )
    .then(existingUser => {
        if (existingUser) {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Email já cadastrado!"
            });
        } else {
            UserController.create(newUser)
            .then( () => {
                return res.redirect('/index.html');
            })
            .catch( (error) => {
                console.error('Erro ao cadastrar usuário', error);
                return res.status(400).json({
                    error: true,
                    mensagem: "Erro: Usuário não foi cadastrado"
                });
            });
        }
    })

    // res.sendFile(path.join(__dirname, '../../client/cadastro.html'));
});


module.exports = cadastro;