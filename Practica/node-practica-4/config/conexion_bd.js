//9
//Modularizamos la conexion a la base de datos y verificacion de esta.
//Este archivo lo exportamos y lo importamos a cada archivo de model ya que todos ellos la utilizaran

//importamos mysql
const mysql = require('mysql');

//Configurando conexion
const conexion= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'curso_nodejs'
});

//Controlando si pudimos conectarnos a la bd
conexion.connect((error)=>{
    if(error){
        console.log("Se ha producido un error al conectarse a la base de datos");
    }else{
        console.log("Conexion exitosa");
    }
});

module.exports = conexion;