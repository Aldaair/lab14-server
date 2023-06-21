//Rutas producto
const express = require("express");
const { generarPDF } = require("../controllers/pdfController");

const router = express.Router();


router.get('/pdf', generarPDF);


module.exports = router;
