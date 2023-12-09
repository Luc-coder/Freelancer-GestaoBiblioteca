//config
const express = require('express');
const login = express();
const path = require('path');
login.use(express.urlencoded({ extended: true }));
login.use(express.json());

//importacao de controller
const UserController = require('../models/UserController');

//rotas
//rota para renderizar
login.get('/', (req, res) => {
    //renderiza a tela de login
    res.sendFile(path.join(__dirname, "../../client/login.html"));
})

//rota para fazer a verificação do login
login.post('/', async (req, res) => {

  //logica para o login
  const { email, password } = req.body;

  UserController.findOne({ where: { email } })
      .then((user) => {
          if (!user) {
            //email não cadastrado
              res.send("<script>alert('Usuário não encontrado! Esse email não tem cadastro.');window.location.href = 'login.html';</script>");
          } else {
              if (user.password === password) {
                  // Autenticação bem-sucedida, redireciona para a tela home
                  res.redirect('/home');
              } else {
                //senha incorreta
                  res.send("<script>alert('Senha incorreta!');window.location.href = 'login.html';</script>");
              }
          }
      })
      .catch((error) => {
        //erro no servidor
          console.error('Erro ao buscar usuário:', error);
          res.send('Erro no servidor' + error);
      });
});

//exportacao
module.exports = login;