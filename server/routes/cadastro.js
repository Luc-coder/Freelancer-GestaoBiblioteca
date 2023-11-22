const express = require("express");
const cadastro = express();

cadastro.get('/', (req, res) => {
    res.send("cadastro");
});


module.exports = cadastro;