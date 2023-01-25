// Requerimos express y guardamos la ejecucion del metodo router
const express = require('express');
const router = express.Router();

// importamos el controlador de las rutas por defecto
const mainController = require('..controllers/mainController.js');

// En vez de app.get usamos router.get. Esto va guardando en router las distintas rutas que luego exportamos

// PRocesa el pedido get con ruta 
router.get('/', mainController.index);

// Exportamos la variabsle router ya con todas las rutas guardadas, para usar en app.js
module.exports = router;