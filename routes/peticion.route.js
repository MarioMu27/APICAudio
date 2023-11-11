const express = require('express');
const router = express();

const {getsPedido} = require('../controllers/peticion.controller');

router.get('/get', getsPedido);


module.exports = router;