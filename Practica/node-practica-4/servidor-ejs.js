//4
//Servidor-expres-ejs
//Importando express
const express = require("express");

//Creamos servidor
const servidor = express();

//Al servidor le indicamos la carpeta estatica
servidor.use(express.static("public"));


servidor.set("view engine", "ejs");         //Al servidor le indicamos el tipo de visualizacion//Que use como motor de plantillas/visualizacion, sea ejs
servidor.set("views", __dirname+"/views");    //Al servidor le indicamos en que carpeta se encontrarán las visualizaciones (Lo que vemos del proyecto). Si quiero cambiar el nombre de la carpeta, debo cambiar el nombre del segundo parametro

//Al servidor le indicamos las rutas disponibles
servidor.route("/")
.get((req,res)=>{
    res.render("index.ejs", {variable1: "Agustin"});
})

//Puerto localhost:3000
servidor.listen(3000, "localhost");