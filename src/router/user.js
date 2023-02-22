// Requerimos express y guardamos la ejecucion del metodo router
const express = require('express');
const router = express.Router();

// importamos el controlador de las rutas por defecto
const userController = require('../controllers/userController.js');

// En vez de app.get usamos router.get. Esto va guardando en router las distintas rutas que luego exportamos

// Procesa el pedido get con ruta 
router.get('/register', userController.register)
router.get('/login', userController.login)
router.get('/profile', userController.profile)

// Exportamos la variabsle router ya con todas las rutas guardadas, para usar en app.js
module.exports = router;