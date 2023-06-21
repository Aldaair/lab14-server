//Rutas producto
const express = require("express");
const router = express.Router();
const {
  createCine,
  getCines,
  createTarifa,
  createPelicula,
  createPasa,
  getTarifas,
  getPeliculas,
  getCinesConPeliculas,
  getPasas
} = require("../controllers/cine.controller");

router.post("/cines", createCine);
router.post("/pasa", createPasa);
router.post("/peliculas", createPelicula);
router.get("/tarifas", getTarifas);
router.get("/cineypeli", getCinesConPeliculas);
router.get("/peliculas", getPeliculas);
router.post("/tarifas", createTarifa);
router.get("/cines", getCines);
router.get("/pasas", getPasas);


module.exports = router;
