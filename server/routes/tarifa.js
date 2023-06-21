//Rutas producto
const express = require("express");
const { getTarifas, createTarifa } = require("../controllers/tarifa.controller");

const router = express.Router();

router.get("/tarifas", getTarifas);
router.post("/tarifas", createTarifa);


module.exports = router;
