//Rutas producto
const express = require("express");
const router = express.Router();
const {
  createCine,
  getCines,
  createTarifa,
  createPelicula,
  createPasa,
  getTarifas
} = require("../controllers/cine.controller");

router.post("/cine", createCine);
router.post("/pasa", createPasa);
router.post("/pelicula", createPelicula);
router.get("/tarifas", getTarifas);
router.post("/tarifas", createTarifa);
router.get("/cines", getCines);

module.exports = router;
