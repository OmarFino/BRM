const router = require('express').Router();
const contorllerUser = require('./controller');

router.post('/postUser',contorllerUser.postUser);

module.exports = router;
