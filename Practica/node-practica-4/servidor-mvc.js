//5
//Servidor-express practicando estructura mvc
//Este es el controlador que llama a la view y al model

//importamos express
const express = require('express');

//Creamos servidor web
const servidor = express();

//Importamos servidor_web que viene de routes/contacto_Routes.js
const ruta_contacto= require('./routes/contacto_Routes.js');

//Cuando alguien entra a la pagina de contacto, enviamos ruta_contacto
servidor.use('/contacto',ruta_contacto);


servidor.listen(3000, "localhost");