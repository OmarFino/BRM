const express = require('express');
const genericRoutes = express.Router();

const user = require('./user');
const login = require('./login');
const product = require('./product');
const compra = require('./compras')

genericRoutes.use('/user', user);
genericRoutes.use('/login', login);
genericRoutes.use('/product', product);
genericRoutes.use('/compra',compra)

module.exports = genericRoutes;