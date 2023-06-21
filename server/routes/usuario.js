//Rutas producto
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

//api/usuario
router.post('/', userController.crearUsuario);
router.post('/', userController.obtenerUsuario);

module.exports = router;