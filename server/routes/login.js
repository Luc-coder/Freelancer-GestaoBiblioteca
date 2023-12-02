//config
const express = require('express');
const login = express();
const path = require('path');

//importacao de rota
const UserController = require('../models/UserController')

//rotas
login.get('/', (req, res) => {
    //renderiza a tela de login
    res.sendFile(path.join(__dirname, "../../client/login.html"));

    const { email, password } = req.body;

    UserClient.findOne({ where: { email } })
    .then((user) => {
      if (!user) {
        
        res.send("<script>alert('Usuário não encontrado!');</script>") +
        res.sendFile(path.join(__dirname, '../client/index.html'));
      } else {
        if (user.password === password) {
          
          req.session.pacienteNome = user.name;
          res.redirect('/pacienteLogado');
            
        } else {
          res.send("<script>alert('Senha incorreta!');</script>") + 
          res.sendFile(path.join(__dirname, '../client/index.html'));
        }
      }
    })
    .catch((error) => {
      console.error('Erro ao buscar usuário:', error);
      res.send('Erro no servidor' + error);
    });
});

//exportacao
module.exports = login;