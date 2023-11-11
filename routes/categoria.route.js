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


const { createCategoria, editCategoria, getsCategoria, getCategoria} = require('../controllers/categoria.controller');


router.put('/editCategoria', editCategoria);
router.get('/getsCategoria', getsCategoria);
router.get('/getCategoria/:id_categoria', getCategoria);
router.post('/createCategoria', createCategoria);
router.post('/updateImage', upload.single('imagen'), (req, res) => {
    const { id } = req.body;
    const fotoPath = req.file.path; // Ruta donde se guardó la imagen

    const fotoPath2 = "https://localhost:3000" + fotoPath; // Ruta para guardar en la base de datos

    console.log(fotoPath2);
    console.log(id);

    connection.query(
      'UPDATE Categoria SET FOTO = ? WHERE ID = ?',
      [fotoPath2, id],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.json({
            message: "Error al actualizar la imagen",
            auth: false,
            token: null,
          });
        }
  
        res.json({
          message: "Imagen actualizada correctamente",
          auth: true,
          token: null,
        });
      }
    );
    }
);



module.exports = router;