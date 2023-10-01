//3  - controlador de get de usuarios

//importamos el model de usuarios_Models.js en ese modelo estan todas las operaciones SQL

const usuariosModel = require('../models/usuarios_Models.js')

const controlador_get = (req,res)=>{


    //vamos a utilizar la operacion read
    usuariosModel.read((err, result)=>{ //cuando se haga el pedido get, se ejecutará el read, en la cual los datos obtenidos por la tabla 'personas' de la base de datos, será aquí 'result'. result, adentro tiene todos los datos y lo guardamos dentro de la clave personas. Esos datos se pasaran a 'usuarios.ejs' y se mostrarán como muestre el mismo archivo ejs. Recordar poner el (err, results) por parametro para que funcione
        res.render('usuarios.ejs',{result})
    })

    
}

module.exports = controlador_get;//Lo exportamos hacia usuario_Routes.js y será usado como usuarioController_get