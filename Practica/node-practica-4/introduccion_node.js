//En node se pueden usar los mismos tipos de variables como en js
let nombre="Agustin";
var edad=21;
const estado=true; 

//Algunos objetos y variables que agregó node.js
//Ahora window y document no existen, vamos a usar global en node
global.console.log("Bienvenido");
global.console.log(`Ubicacion de archivo con nombre ${__filename}`);
global.console.log(`Ubicacion de archivo sin nombre ${__dirname}`);

module.exports ={ dato1: nombre, dato2: edad, dato3: estado};
global.console.log(module);

//El module.exports se importaria en otro archivo con: 
//let variableExportada = require(./introduccion_node.js); 

global.console.log(global.process);
