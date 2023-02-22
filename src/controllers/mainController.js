// Requerimos path para enviar los archivos HTML
const path = require('path');

// Creamos objeto literal con metodos a exportar
const mainController = {
    // Manejo del pedido get con ruta
    index: (req, res) => {
        res.sendFile(path.resolve(__dirname,'../views/index.html'))
    }
}

// Exportamos el objeto literal con distintos metodos que se usara en el enrutador por defecto
module.exports = mainController;