const express = require('express');
const router = express();

const auth = require('./auth.route');
const cliente = require('./cliente.route');
const productos = require('./productos.route');
const categoria = require('./categoria.route');
const restaurante = require('./restaurante.route');
const repartidor = require('./repartidor.route');
const tracking = require('./tracking.route');
const pedidos = require('./pedidos.route');
const calificacion = require('./calificacion.route');
const carrito = require('./carrito.route');
const peticion = require ('./peticion.route')

router.use('/auth', auth);
router.use('/calificacion', calificacion);
router.use('/carrito', carrito);
router.use('/categoria', categoria);
router.use('/cliente', cliente);
router.use('/pedidos', pedidos);
router.use('/productos', productos);
router.use('/repartidor', repartidor);
router.use('/restaurante', restaurante);
router.use('/tracking', tracking);
router.use('/peticion', peticion)



module.exports = router; 

