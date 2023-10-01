//2
//luego de instalar con npm install express

//importando express para recibir y responder pedidos
const express = require("express");

//Creando servidor
const servidor = express();

//Definimos que los archivos estaticos que se agregaran a algun html, estaran en la carpeta "public"
//Para agregarlo al servidor usamos el metodo use
servidor.use(express.static("public"));

//gestionando pedidos
servidor.get('/', (req, res) => {//Forma 1

    //maneras de responder
    //res.send("<h1>Hello word</h1>");
    //res.json({dato1:"Agustin", dato2:21, dato3:true});

    //Este permitirá enviar archivos al navegador:
    //res.sendFile(__dirname+"/nombrearchivo.ext");//Acordarse de la barra antes del nombre

    //las veremos mas adelante
    //res.render();
    //res.redirect();

    //res.write("<h1>Codigo HTML</h1>");

    //res.end()//Finalizar y enviar

    res.sendFile(__dirname + "/index.html");

});

servidor.get("/contacto", (req, res) => {
    res.sendFile(__dirname + "/contacto.html")
});



//(Como en http)
//indicando que computador (PORT + IP) seguirá las reglas del servidor
servidor.listen(3000, "localhost");