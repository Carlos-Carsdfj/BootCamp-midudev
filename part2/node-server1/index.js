const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/'));

app.listen('3005', function() {
  console.log('Servidor web escuchando en el puerto 3005');
});
