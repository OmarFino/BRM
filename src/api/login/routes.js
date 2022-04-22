const router =require('express').Router();
const controllerLogin= require('./controller');

router.get('/login', controllerLogin.getAdminLogin);

module.exports = router;