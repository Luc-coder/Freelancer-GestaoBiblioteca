//config
const express = require('express');
const login = express();
const path = require('path');

//rotas
login.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/login.html"));
});

//exportacao
module.exports = login;