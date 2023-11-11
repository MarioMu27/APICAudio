const express = require('express');
const router = express();

const {  addCalificacionProducto, getCalificacionProducto, addCalificacionRepartidor, getCalificacionRepartidor, addCalificacionRestaurante, getCalificacionRestaurante} = require('../controllers/calificacion.controller');

router.post('/addCalificacionProducto', addCalificacionProducto);
router.get('/getCalificacionProducto', getCalificacionProducto);

router.post('/addCalificacionRepartidor', addCalificacionRepartidor);
router.get('/getCalificacionRepartidor', getCalificacionRepartidor);




module.exports = router;