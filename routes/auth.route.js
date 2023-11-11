const express = require('express');
const router = express();

const {loginCliente, logout, authMiddleware} = require('../controllers/auth.controller');



router.post('/login', loginCliente);
router.post('/logout', logout);
router.get("/verify", authMiddleware, (req, res) => {
    res.json({ message: "Ruta protegida accesible" });
  });




module.exports = router;