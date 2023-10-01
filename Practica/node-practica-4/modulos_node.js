//Modulo definido por nosotros
let nombre="Agustin";
var edad=21;
const estado=true; 

module.exports ={ dato1: nombre, dato2: edad, dato3: estado};

const { Agent } = require("http");
//global.console.log(module);

//////Creado por nosotros, Importado desde otro archivo
let importado = require("./introduccion_node.js");
global.console.log(importado);

//Modulo propio de node.js
///////Importamos os  (Ver documentacion en la pagina de node)
let os = require("os");
global.console.log(os.type());//tipo de sistema operativo
global.console.log(os.homedir());//En que home/usuario se encuentra este archivo.
global.console.log(os.hostname());//Nombre de nuestra computadora/dispositivo
global.console.log(os.platform());
global.console.log(os.totalmem());
global.console.log(os.version());

//Modulos creados por otras personas
//////Debemos descargar el codigo a nuestro proyecto e importarlo para utilizarlo
////// O tambien podemos utilizar el repositorio npm (node package manager) y evitar problemas de compatibilidad




