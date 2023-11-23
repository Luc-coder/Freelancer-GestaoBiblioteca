const express = require("express");
const login = express();

const path = require("path");

login.use(express.static(path.join(__dirname, '../../client')));

login.post('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/login.html'));
});


module.exports = login;