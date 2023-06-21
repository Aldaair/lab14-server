//Rutas producto
const express = require("express");
const router = express.Router();
const {
  createCine,
  getCines,
  getCinesConPeliculas,
} = require("../controllers/cine.controller");

router.post("/cines", createCine);
router.get("/cineypeli", getCinesConPeliculas);
router.get("/cines", getCines);



module.exports = router;
