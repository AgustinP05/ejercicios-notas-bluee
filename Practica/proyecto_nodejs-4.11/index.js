//CLASE 4.11

//1
//Importamos el modulo express
const express = require('express');

//Creamos el servidor
const servidorWeb = express();


//Importamos la creacion del servidor de servidor.js para evitar copia y pega
//const servidorWeb = require('./servidor.js');

//indicamos el motor de visualizacion
servidorWeb.set('view engine', 'ejs');


//Importamos e Indicamos rutas
const usuarioRoute = require('./routes/usuarios_Routes.js');
servidorWeb.use('/usuario',usuarioRoute);

//Definiendo en cual computara se ejecutará este archivo
servidorWeb.listen(3000, 'localhost');