//3
//luego de instalar con npm install express

//importando express para recibir y responder pedidos
const express = require("express");

//Creando servidor
const servidor = express();

//Definimos que los archivos estaticos que se agregaran a algun html, estaran en la carpeta "public"
//Para agregarlo al servidor usamos el metodo use
servidor.use(express.static("public"));

//gestionando pedidos
//Forma 2
//Usando route
servidor.route("/")
.get((req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

servidor.route("/contacto")
.get((req,res)=>{
    res.sendFile(__dirname + "/contacto.html");
})

servidor.route("/contacto/crear")
.get((req,res)=>{
    res.sendFile(__dirname + "/contacto.html");
})

servidor.route("/contacto/editar")
.get((req,res)=>{
    res.sendFile(__dirname + "/contacto.html");
})

servidor.route("/contacto/eliminar")
.get((req,res)=>{
    res.sendFile(__dirname + "/contacto.html");
})
.post((req,res)=>{})

//Forma 3
//Usando router
// const router = express.Router();
// router.get("/",(req,res)=>{
//     res.sendFile(__dirname + "/index.html")
// })

// router.get("/contacto/crear",(req,res)=>{
//     res.sendFile(__dirname + "/contacto.html")
// })

// router.get("/contacto/editar",(req,res)=>{
//     res.sendFile(__dirname + "/contacto.html")
// })
// router.get("/contacto/eliminar",(req,res)=>{
//     res.sendFile(__dirname + "/contacto.html")
// })

// servidor.use(router);

//(Como en http)
//indicando que computador (PORT + IP) seguirá las reglas del servidor
servidor.listen(3000, "localhost");