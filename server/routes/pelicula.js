//Rutas producto
const express = require("express");
const { createPelicula, getPeliculas, getPeliculaById, actualizarPelicula, eliminarPelicula } = require("../controllers/peliculas.controller");
const router = express.Router();


router.post("/peliculas", createPelicula);
router.get("/peliculas", getPeliculas);
router.put("/peliculas/:id", actualizarPelicula);
router.delete("/peliculas/:id", eliminarPelicula);
router.get("/peliculas/:id", getPeliculaById);



module.exports = router;
