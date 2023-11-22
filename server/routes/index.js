const express = require("express");
const index = express();

index.get('/', (req, res) => {
    res.send("Olá Mundo");
});


module.exports = index;