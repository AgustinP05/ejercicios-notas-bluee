//6
//Modularizamos el codigo de esta ruta

//importamos express
const express = require('express');




//Creamos servidor web
const servidor_web = express();

//Indicamos al servidor que el motor de visualizacion (respuesta de visualizacion) va a ser en ejs
servidor_web.set('view engine',"ejs");
//servidor_web.set("views",__dirname+"/views"); 
//Cuando alguien envia informacion desde una url
servidor_web.use(express.urlencoded({extended: true}));//Le indicamos a nuestro servidor que cuando reciba pedidos, use el urlencoded. Eso hace que la url venga decodificada. Acepta caracteres en url
servidor_web.use(express.json()); //Indicamos al servidor que decodifique en formato json



//controlamos la peticion.Rutas de mi proyecto
servidor_web.route('/') //Esto seria en la pagina principal de /contacto
.get((req, res)=>{

    //Cuando hacemos un pedido get vamos a usar req.query y req.params
    //console.log("Query");
    //console.log(req.query);//Datos pasados por consultas url por ej: http://localhost:3000/contacto?dato1=1234&dato2=Soy%20un%20texto
    //console.log("Params");
    //console.log(req.params);

    //res.file(archivo.html) Para renderizar html 
    res.render("contacto.ejs")//Para renderizar ejs. Recordar que lo que queremos que se renderice por el motor, tiene que estar en la carpeta "views" 
})


//Importamos la funcion 'controller_envia_form' del archivo 'contacto_enviaForm_Controller.js' para utilizarlo como controlador en donde corresponde
//Controlamos la ruta que esta abajo
const envia_form_controller = require('../controller/contacto_enviaForm_Controller.js'); 


//Cuando el usuario hace submit en el boton, hace un post enviando datos al servidor. Esto se puede ver en el archivo contacto.ejs. A la ruta de esta accion la llamamos en este ejemplo /contacto/formulario1 para dar a entender que el action del form se asocia con este bloque de codigo post con la misma ruta. Basicamente ese form activa este metodo en esta ruta. Ver form del contacto.ejs  
servidor_web.route('/envia_form') // /contacto/formulario1
.post(envia_form_controller);

//Exportamos servidor_web para usarlo en servidor-mvc.js
module.exports = servidor_web;