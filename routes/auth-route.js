const express = require('express');
const route = express.Router();

const { loginAction } = require("../controllers/auth-controller");

route.post('/login', loginAction);

module.exports = route