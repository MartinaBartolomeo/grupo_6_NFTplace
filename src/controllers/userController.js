// Requerimos path para enviar los archivos HTML
const path = require('path');

// Creamos objeto literal con metodos a exportar
const userController = {
    // Manejo del pedido get con ruta /user/conectarse
    login: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/login.html'))
     },
    // Manejo del pedido get con ruta /user/registrarse
   register: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/register.html'))
    },
    // Manejo del pedido get con ruta /user/perfil
    profile: (req, res) => {
        res.send("perfil del usurario")
    },
}

// Exportamos el objeto literal con distintos metodos que se usara en el enrutador por defecto
module.exports = userController;