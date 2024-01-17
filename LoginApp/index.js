const express = require('express');
const app= express();
const hostname = "localhost";
const port = "9000";
const db = require('./db');

const AuthController = require('./controller/authController');

app.get("/auth", AuthController)

app.listen(port, hostname, () => {
    console.log(`Server is Running on http://${hostname}:${port}`);


});

