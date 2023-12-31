//Rutas producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const pdfController = require('../controllers/pdf.controller');

//api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.verProducto);
router.delete('/:id', productoController.eliminarProducto);
//router.get('/pdf', pdfController.generarPDf);

module.exports = router;