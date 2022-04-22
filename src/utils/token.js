const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  verifytokenCliente: async function (req, res, next) {
    let token = req.headers['authorization'];
    if (!token) {
      return res
        .status(401)
        .send({ message: 'no token No se ha proporcionado ningún token' });
    }
    try {
      token = token.replace('Bearer ', '');
      const decoded = await jwt.verify(token, process.env.KEY_SECRET);
      decoded.data.nombreRole === 'Cliente'
        ? next()
        : res.status(401).send({
            message: 'No tiene autorización para esta solicitud'
          });
    } catch (error) {
      return res.status(401).send({
        message: error.message
      });
    }
  },

  verifytokenAdmin: async function (req, res, next) {
    let token = req.headers['authorization'];
    if (!token) {
      return res
        .status(401)
        .send({ message: 'no token No se ha proporcionado ningún token' });
    }
    try {
      token = token.replace('Bearer ', '');
      const decoded = await jwt.verify(token, process.env.KEY_SECRET);
      decoded.data.nombreRole === 'Administrador'
        ? next()
        : res.status(401).send({
            message: 'No tiene autorización para esta solicitud'
          });
    } catch (error) {
      return res.status(401).send({
        message: error.message
      });
    }
  },

  verifytokenTodos: async function (req, res, next) {
    let token = req.headers['authorization'];
    if (!token) {
      return res
        .status(401)
        .send({ message: 'no token No se ha proporcionado ningún token' });
    }
    try {
      token = token.replace('Bearer ', '');
      const decoded = await jwt.verify(token, process.env.KEY_SECRET);
      decoded.data.nombreRole != ''
        ? next()
        : res.status(401).send({
            message: 'No tiene autorización para esta solicitud'
          });
    } catch (error) {
      return res.status(401).send({
        message: error.message
      });
    }
  }
};
