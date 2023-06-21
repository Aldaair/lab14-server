//Rutas producto
const express = require("express");
const { getTarifas, createTarifa, getTarifaById, actualizarTarifa, eliminarTarifa } = require("../controllers/tarifa.controller");

const router = express.Router();

router.get("/tarifas", getTarifas);
router.post("/tarifas", createTarifa);
router.get("/tarifas/:id", getTarifaById);
router.put("/tarifas/:id", actualizarTarifa);
router.delete("/tarifas/:id", eliminarTarifa);




module.exports = router;
