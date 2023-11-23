const express = require("express");
const path = require("path");

const index = express();

index.use(express.static(path.join(__dirname, '../../client')));

index.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
});


module.exports = index;