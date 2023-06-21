const Pelicula = require("../models/Pelicula");

const createPelicula = async (req, res) => {
  const { titulo, director, clasificacion, protagonista, genero } = req.body;

  try {
    const peli = new Pelicula({
      titulo,
      director,
      clasificacion,
      protagonista,
      genero,
    });

    await peli.save();

    res.json({ message: "Pelicula creada" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
const getPeliculas = async (req, res) => {
  Pelicula.find({})
    .then((cines) => {
      res.json(cines);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error al obtener los peloiculas");
    });
};
const getPeliculaById = async (req, res) => {
  const { id } = req.params;
  try {
    const pelicula = await Pelicula.findById(id);
    res.json(pelicula);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener la película");
  }
};
const actualizarPelicula = async (req, res) => {
  const { id } = req.params;
  const { titulo, director, clasificacion, protagonista, genero } = req.body;

  try {
    const pelicula = await Pelicula.findByIdAndUpdate(
      id,
      {
        titulo,
        director,
        clasificacion,
        protagonista,
        genero,
      },
      { new: true }
    );

    res.json(pelicula);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar la película");
  }
};
const eliminarPelicula = async (req, res) => {
  const { id } = req.params;
  try {
    await Pelicula.findByIdAndDelete(id);
    res.json({ message: "Película eliminada" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar la película");
  }
};

module.exports = {
  createPelicula,
  getPeliculas,
  getPeliculaById,
  actualizarPelicula,
  eliminarPelicula,
};
