//1
//Importando nuestro modulo que permite gestionar los pedidos y respuestas de nuestra computadora servidor
const http = require("http");

//Creando servidor
const servidor = http.createServer((request,response)=>{//createServer recibe un callback que le permite gestionar el servidor, viendo que recibe y que responder
    // console.log("recibi un pedido: ");

    // console.log("la PC que envió el pedido es: "+request.ip);
    // console.log("la url que me hizo el pedido es: "+request.url);
    // console.log("el tipo de metodo que se hizo es: "+request.method);
    // console.log("la cabecera del pedido es: "+request.headers);
    // console.log("el cuerpo del pedido es: "+request.body);
    // console.log("los parametros del pedido desde una url son: "+request.params);
    // console.log("los parametros del pedido desde una consulta son: "+request.query);
    // console.log("la cookie de este pedido es: "+request.cookie);
    // console.log("la session de este pedido es: "+request.session);
    // console.log("la ubicacion de la carpeta de este pedido es: "+request.path);

    //Escribir datos en el body de la respuesta
    //response.write("Respuesta brindada al navegador");//Este solo escribe texto
    //response.write("<h1>La respuesta ha terminado</h1>");

    console.log(request.method);
    if(request.method =="GET"){
        respond.write("<h1>Texto ejemplo</h1>")
    };
    //Si el usuario hace un pedido GET, nosotros le respondemos al usuario con el texto

    //Finalizar la respuesta y enviarla al cliente
    response.end();
});


//indicando que computador (PORT + IP) seguirá las reglas del servidor
//servidor.listen(3000, '192.168.0.7')          //(Manera directa)En la practica vamos a utilizar la ip de nuestra pc, y llamarla con el numeroIp:3000
//servidor.listen(3000, 'localhost');           //(Manera indirecta)Quien va a ser la computadora que va a estar preparada para recibir el pedido o hacer el pedido //Numero de puerto (canal por el que hace posible la conexion de datos de entrada) para que reciba el pedido. Localhost automaticamente toma nuestra ip
servidor.listen(3000);                          //Sirve tambien, por defecto en localhost

//Para visualizar estos ejemplos tenemos que poner en la consola node servidor_http.js (nombre de archivo) para abrir el servidor y luego en una pestaña del navegador, buscar localhost:3000 para simular que alguien entra en este servidor
