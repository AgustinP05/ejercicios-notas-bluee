//4  - Tendra las operaciones SQL que se utilizaran en esta ruta usuarios, en este caso será read

//Importamos la conexion con la base de datos
const conexion = require('../config/conexion.js');

//Lista de operaciones
const operaciones={
    read: function(functionResult){
       conexion.query('SELECT * FROM personas',functionResult); //seleccionar todos los datos de la tabla 'personas'
       
    }
}

module.exports= operaciones;//Se exportará a usuarios_controllers_get.js y se utilizará como usuariosModel 