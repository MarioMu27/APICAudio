const express = require('express');
const router = express();

const {  createRepartidor,
    editRepartidor,
    getRepartidor,
    createUbicacionRepatidor,
    editUbicacionRepartidor,
    allUbicacionRepartidor,
    getUbicacionRepartidor} = require('../controllers/repartidor.controller');

router.post('/create', createRepartidor);
router.put('/edit', editRepartidor);
router.get('/get', getRepartidor);
router.post('/createUbicacion', createUbicacionRepatidor);
router.put('/editUbicacion', editUbicacionRepartidor);
router.get('/allUbicacion', allUbicacionRepartidor);
router.get('/getUbicacion', getUbicacionRepartidor);



module.exports = router;