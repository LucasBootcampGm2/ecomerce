// index.js
var mysql = require('mysql');

// Crea la conexión a la base de datos
var con = mysql.createConnection({
  host: "127.0.0.1",     // Host de MySQL
  user: "root",          // Usuario de MySQL
  password: "hpdelucas", // Reemplaza con tu contraseña
  database: "ecommerce",  // Nombre de la base de datos
  port: 3306             // Puerto de MySQL, el puerto por defecto es 3306
});

// Conecta a la base de datos
con.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + con.threadId);
});

// Puedes realizar tus consultas aquí...

// No olvides cerrar la conexión cuando termines
// con.end();
