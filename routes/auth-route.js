const express = require('express');
const route = express.Router();

const { loginAction, registerAction } = require("../controllers/auth-controller");

route.post('/login', loginAction);
route.post('/register', registerAction);

module.exports = route