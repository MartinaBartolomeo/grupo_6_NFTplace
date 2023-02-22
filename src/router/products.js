// Requerimos express y guardamos la ejecucion del metodo router
const express = require('express');
const router = express.Router();

// importamos el controlador de las rutas por defecto
const productsController = require('../controllers/productsController');

// En vez de app.get usamos router.get. Esto va guardando en router las distintas rutas que luego exportamos

// Ruta parametrizada!!
router.get('/compra', productsController.compra)
router.get('/venta', productsController.venta)
router.get('/:num', productsController.detalle)

// Exportamos la variabsle router ya con todas las rutas guardadas, para usar en app.js
module.exports = router;