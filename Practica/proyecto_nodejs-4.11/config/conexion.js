//5  - conexion a la bd

//importamos mysql
const mysql = require('mysql');
//Nos conectamos a la base de datos
const conexion =mysql.createConnection({
    host:'localhost',
    user:'root',
    pass:'',
    database:'curso_nodejs'
});

module.exports= conexion;