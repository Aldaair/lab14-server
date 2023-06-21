const Cine = require("../models/Cine");

const getCines = async (req, res) => {
  Cine.find({})
    .then((cines) => {
      res.json(cines);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error al obtener los cines");
    });
};

const getCinesConPeliculas = async (req, res) => {
  try {
    const cines = await Cine.find({});
    const cinesConPeliculas = await Promise.all(
      cines.map(async (cine) => {
        console.log(cine._id);
        const peliculas = await Pelicula.find({ _id: cine._id });
        return {
          cine,
          peliculas,
        };
      })
    );
    res.json(cinesConPeliculas);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los cines con películas");
  }
};
const createCine = async (req, res) => {
  const { nombre, calle, numero, telefono, dia, id_tarifa } = req.body;

  try {
    const cine = new Cine({
      nombre,
      calle,
      numero,
      telefono,
      dia,
      id_tarifa,
    });

    await cine.save();

    res.json({ message: "Cine creado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
const deleteCine = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    await Cine.findByIdAndDelete(id);
    res.json({ message: "Cine eliminado" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar el cine");
  }
};

module.exports = {
  getCines,
  createCine,
  getCinesConPeliculas,
  deleteCine
};
