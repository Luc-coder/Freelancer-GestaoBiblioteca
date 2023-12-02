//config
const express = require('express');
const home = express();
const path = require('path');

//rota
home.get('/home', (req, res) => {
    //renderiza a pagina de home
    res.sendFile(path.join(__dirname, "../../client/home.html"));
});

//exportacao
module.exports = home;