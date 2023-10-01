//2  -  Usuario Routes

//Importamos la creacion del servidor de servidor.js para evitar copia y pega
//const servidorWeb = require('../servidor.js');
//Importamos el modulo express
const express = require('express');

//Creamos el servidor
const servidorWeb = express();



//importamos el controlador para usar dentro de los pedidos http de usuario_Routes.js
const usuarioController_get= require('../controllers/usuarios_controllers_get.js')

//Pagina principal de usuarios
servidorWeb.route('/')
.get(usuarioController_get);

module.exports = servidorWeb;//Se exportará a index.js y se utilizará ahi como usuarioRoute para indicarle las rutas y pedidos que se haran en /usuario