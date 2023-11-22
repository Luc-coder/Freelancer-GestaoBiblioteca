const express = require("express");
const sobre = express();

sobre.get('/', (req, res) => {
    res.send("Página de sobre");
});


module.exports = sobre;