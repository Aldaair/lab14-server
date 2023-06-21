//Rutas producto
const express = require("express");
const { createPasa, getPasas, deletePasa, getPasasConPeliculasPorCine, getCinesConPeliculas } = require("../controllers/pasa.controller");
const router = express.Router();


router.post("/pasas", createPasa);
router.get("/pasas", getPasas);
router.get("/pasas2", getPasasConPeliculasPorCine);
router.get("/cinesconpelicula", getCinesConPeliculas);

router.delete("/pasas/:id", deletePasa);



module.exports = router;
