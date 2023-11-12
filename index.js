const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios'); 

const apiURL = '';



const rutas = require('./routes/index.js');
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.use(cors()); 
app.use(express.json());
app.use('/',rutas);


function hacerSolicitud() {
  axios.get(apiURL)
    .then(response => {
      // Procesa la respuesta como desees
      if (response.status === 200) {
        console.log('Solicitud exitosa');
      } else {
        console.log('Error en la solicitud:', response.status);
      }
    })
    .catch(error => {
      console.log('Error en la solicitud:', error);
    });
}

setInterval(hacerSolicitud, 60000);

const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(' 🚀 El servidor ha despegado en el puerto ', port);
});