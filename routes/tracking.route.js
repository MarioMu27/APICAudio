const express = require('express');
const router = express();

const {getTracking, getPedidosFinalizados,updatePedidos,getAllTracking} = require('../controllers/tracking.controller');

router.post('/getTracking', getTracking);
router.post('/getPedidosFinalizados', getPedidosFinalizados);
router.post('/updatePedidos', updatePedidos);
router.get('/getAllTracking', getAllTracking);


module.exports = router;