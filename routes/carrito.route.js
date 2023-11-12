const express = require('express');
const router = express();

const {    
    createCarrito,
    editCarrito,
    deleteCarrito,
    getCarrito} = require('../controllers/carrito.controller');

router.post('/createCarrito', createCarrito);
router.put('/editCarrito', editCarrito);
router.delete('/deleteCarrito/:id_carrito', deleteCarrito);
router.post('/getCarrito', getCarrito);

module.exports = router;