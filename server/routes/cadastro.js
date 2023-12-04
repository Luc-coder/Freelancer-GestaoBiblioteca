//config
const express = require('express');
const cadastro = express();
const bodyParser = require('body-parser');
cadastro.use(bodyParser.urlencoded({ extended: false }));
cadastro.use(bodyParser.json());

//importacao de controller
const UserController = require('../models/UserController');

//rota
cadastro.post('/cadastro', (req, res) => {
    const newUser = req.body;

  //verifica se email ja esta cadastrado
  UserController.findOne({ where: { email: newUser.email } })
    .then(existingUser => {
      if (existingUser) {
        //alerta que email ja esta cadastrado
        res.send("<script>alert('Email já cadastrado!');</script>");
      } else {
       //cria a conta
        UserController.create(newUser)
          .then(() => {
            //retorna ao login
            return res.redirect('/');
          })
          .catch((error) => {
            //erro interno no servidor
            console.error('Erro ao cadastrar usuário:', error);
            res.send('Erro no servidor' + error);
          });
      }
    });
});

//exportacao da rota
module.exports = cadastro;