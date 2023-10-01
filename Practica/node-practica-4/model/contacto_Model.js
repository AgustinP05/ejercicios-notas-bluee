//7
//Modularizamos el codigo que tenga que ver con el modelo (interacciom de base de datos) de la ruta contacto

//Importamos la conexion y verificacion de la base de datos
//Todos los archivos de model la utilizaran
const conexion = require('../config/conexion_bd.js');

//pedidos que se van a utilizar en contacto
//RECORDAR que en un proyecto mas real, no pondriamos operaciones de mas, para una pagina de contacto solo haria falta un insert y no los demas.
const contacto_Operaciones={
    insert: function(datos,functionResultado){//Insertando datos de inputs a la bd
        conexion.query('INSERT INTO personas (Nombre, Email) VALUE ("'+datos.nombre+'","'+datos.email+'")',functionResultado);
    
        //El parametro 'datos' pasa la informacion dada en controlador y pasa a la query 
        //El parametro 'functionResultado' va a ser una funcion que invocamos en este parametro en el controlador. Basicamente controla que hacer con el resultado luego de interactuar con la base de datos. La funcion que pondremos aqui controla el resultado y se renderizará algo de views si es necesario.

    },
    select: function(functionResultado){//Este functionResultado se puede manejar en otro lado para mapear los usuarios por ejemplo
        conexion.query('SELECT * FROM personas', functionResultado);//Selecciona todos los elementos de la tabla personas y esa informacion se maneja con la functionResultado (no se hizo para el ejemplo)
    },
    delete: function(dato_eliminacion, functionCallback){ //Esta funcion callback la ponemos cuando invocamos la funcion delete, la funcion callback que se aplique, será para manipular el resultado de toda la funcion. Se utilizará en contacto_enviaForm_Controller.js
        conexion.query('DELETE FROM personas WHERE '+dato_eliminacion+' ', functionCallback);
    },
    update: function(dato_modificar, functionCallback){//dato_modificar seria un objeto que contenga las clave y valor. ej dato_modificar={clave:'', valor:''}
        conexion.query('UPDATE personas SET '+dato_modificar.clave+'='+dato_modificar.valor+' ', functionCallback);
    }
};

//Exportamos conexion para usarlo en contacto_Routes.js
module.exports = contacto_Operaciones;