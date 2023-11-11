
const caPath = './ca.pem';
const mysql = require('mysql2');
const fs = require('fs');

const connectionConfig = {
  host: 'mysql-3815965c-crudweb-01.aivencloud.com',
  port: 24225,
  user: 'avnadmin',
  password: 'AVNS_QK5ivUCzsR7mSgz1yis', 
  database: 'ConceptAudio',
  ssl: {
    ca: fs.readFileSync(caPath),
    rejectUnauthorized: true,
  },
};


const prueba = async () => {
  try {
    const connection = await mysql.createConnection(connectionConfig);
    console.log('Conexión exitosa a la base de datos MySQL.');
    return connection;
  } catch (error) {
    console.error('Error al conectar a la base de datos MySQL:', error);
    throw error;
  }
};

const connection = mysql.createConnection(connectionConfig);



module.exports = { connection, prueba };