//Rutas producto
const express = require("express");
const router = express.Router();
const {
  createCine,
  getCines,
  getCinesConPeliculas,
  deleteCine,
} = require("../controllers/cine.controller");

router.post("/cines", createCine);
router.get("/cineypeli", getCinesConPeliculas);
router.get("/cines", getCines);
router.delete("/cines/:id", deleteCine);




module.exports = router;
