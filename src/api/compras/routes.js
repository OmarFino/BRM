const router = require('express').Router();
const contorllerUser = require('./controller');
const { verifytokenAdmin, verifytokenTodos } =require('../../utils/token');

router.post('/postCompra',verifytokenTodos,contorllerUser.postCompra);
router.get('/getFacturaTotal/:idFactura',verifytokenTodos,contorllerUser.getFacturaTotal);
router.get('/historialProductosCompraUsuario/:idUser',verifytokenTodos,contorllerUser.historialProductosCompraUsuario);

module.exports = router;