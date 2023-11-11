const express = require('express');
const router = express();
const jwt = require("jsonwebtoken");
const { connection } = require("../services/bd");

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });



const {  createCliente,
  editCliente,
  getCliente,
  createUbicacionCliente,
  editUbicacionCliente,
  allUbicacionCliente,
  getUbicacionCliente} = require('../controllers/cliente.controller');

router.post('/createCliente', createCliente);
router.post('/editCliente', editCliente);
router.post ('/getCliente', getCliente);
router.post('/createUbicacionCliente', createUbicacionCliente);
router.post('/editUbicacionCliente', editUbicacionCliente);
router.get('/allUbicacionCliente/:id_cliente', allUbicacionCliente);
router.post('/getUbicacionCliente', getUbicacionCliente);
router.post('/updateImage', upload.single('imagen'), (req, res) => {
    const { token } = req.body;
    const fotoPath = req.file.path; // Ruta donde se guardó la imagen

    const fotoPath2 = "https://localhost:3000" + fotoPath; // Ruta para guardar en la base de datos
  
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        if (error) {
          return res.status(401).json({
            message: "Token inválido",
            auth: false,
            token: null,
          });
        }
    
        id_cliente = decoded.id;
  
    connection.query(
      'UPDATE Clientes SET FOTO = ? WHERE ID = ?',
      [fotoPath2, id_cliente],
      (error, results) => {
        if (error) {
          console.log(error);
          res.json({
            message: 'Error al subir la imagen',
          });
        } else {
          res.json({
            message: 'Imagen subida y ruta guardada en la base de datos',
          });
        }
        }
        );
    }
    );
    }
);


module.exports = router;