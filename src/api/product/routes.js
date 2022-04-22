const router = require('express').Router();
const contorllerUser = require('./controller');
const { verifytokenAdmin, verifytokenTodos } =require('../../utils/token');

router.get('/getProduct',verifytokenTodos,contorllerUser.getProduct);
router.post('/postProduct',verifytokenAdmin,contorllerUser.postProduct);
router.put('/putProduct',verifytokenAdmin,contorllerUser.putProduct);
router.delete('/deleteProduct/:idProduct',verifytokenAdmin,contorllerUser.deleteProduct);

module.exports = router;