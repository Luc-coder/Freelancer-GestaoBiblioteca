//config
const express = require('express');
const cadastro = express();
const bodyParser = require('body-parser');
cadastro.use(bodyParser.urlencoded({ extended: false }));
cadastro.use(bodyParser.json());

//importacao de rotas
const UserController = require('../models/UserController');

//rota
cadastro.post('/cadastro', (req, res) => {
    const newUser = req.body;

  //verifica se email ja esta cadastrado
  UserController.findOne({ where: { email: newUser.email } })
    .then(existingUser => {
      if (existingUser) {
        //alerta que email ja esta cadastrado
        return res.status(400).json({
          erro: true,
          mensagem: "Erro: Email já cadastrado!"
        });
      } else {
       //cria a conta
        UserController.create(newUser)
          .then(() => {
            //retorna ao login
            return res.redirect('/');
          })
          .catch((error) => {
            //erro interno no servidor
            console.error('Erro ao cadastrar o paciente:', error);
            return res.status(500).json({
              erro: true,
              mensagem: "Erro: Usuário não cadastrado com sucesso!"
            });
          });
      }
    });
});

//exportacao da rota
module.exports = cadastro;