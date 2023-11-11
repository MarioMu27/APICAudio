const express = require('express');
const router = express();

const {createPedido} = require('../controllers/pedidos.controller');

router.post('/create', createPedido);


module.exports = router;