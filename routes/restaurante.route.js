const express = require('express');
const router = express();

const {  createRestaurante,
    editRestaurante,
    getRestaurante,
    createUbicacionRestaurante,
    editUbicacionRestaurante,
    allUbicacionRestaurante,
    getUbicacionRestaurante,
    getsRestaurante} = require('../controllers/restaurante.controller');

router.post('/createRestaurante', createRestaurante);
router.put('/editRestaurante', editRestaurante);
router.get('/getRestaurante/:id_restaurante', getRestaurante);
router.post('/createUbicacionRestaurante', createUbicacionRestaurante);
router.put('/editUbicacionRestaurante', editUbicacionRestaurante);
router.get('/allUbicacionRestaurante', allUbicacionRestaurante);
router.get('/getUbicacionRestaurante/:id_ubicacion_restaurante', getUbicacionRestaurante);
router.get('/getsRestaurante', getsRestaurante);



module.exports = router;