//8 
//Controlador de POST de la ruta /envia_form de contacto_Routes.js

//importamos la variable de contacto_Model.js y la guardamos dentro de una nueva variable para utilizarla en este contacto_Routes.js
//El metodo POST va a necesitar esta variable importada para conectarse a la base de datos y hacer una query (una consulta a la base de datos en lenguaje SQL)
const contacto_Model = require('../model/contacto_Model.js');//Aqui estan todas las query de contacto_Model.js 



const controller_envia_form= (req,res)=>{
    //Cuando hacemos un pedido post vamos a utilizar req.body
    let datos_formulario= req.body;
    console.log(datos_formulario);

    if(datos_formulario.nombre==" " || datos_formulario.email==" "){
        res.send("No puede estar el campo vacío");
    }else{
        //Insertando datos de inputs a la bd
        //utilizamos la query importada
        contacto_Model.insert(datos_formulario, functionControlResultado); //contacto_Model es el objeto que contiene todas las acciones de contacto_Operaciones de contacto_Model.js       
        //functionControlResultado sería una funcion que invocamos aqui para manejar algo de la views si es necesario. O basicamente controlar el resultado y decidir que hacer con eso luego de interactuar con la base de datos

        //mostrando datos guardados
        //res.send("Datos enviados correctamente")//Lo que le responde el servidor al usuario
        res.render("contacto_respuesta.ejs",datos_formulario);
    }
}

module.exports= controller_envia_form;