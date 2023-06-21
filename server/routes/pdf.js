//Rutas producto
const express = require("express");
const { generarPDF } = require("../controllers/pdf.controller");

const router = express.Router();


router.get('/pdf', generarPDF);


module.exports = router;
