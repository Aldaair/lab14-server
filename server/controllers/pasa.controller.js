const Pasa = require("../models/Pasa");

const getPasas = async (req, res) => {
  Pasa.find({})
    .then((tarifas) => {
      res.json(tarifas);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error al obtener las pasa");
    });
};

const createPasa = async (req, res) => {
  const { hora, id_cine, id_pelicula } = req.body;

  try {
    const pasa = new Pasa({
      hora,
      id_cine,
      id_pelicula,
    });

    await pasa.save();

    res.json({ message: "Cine creado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
const deletePasa = async (req, res) => {
  const { id } = req.params;

  try {
    await Pasa.findByIdAndDelete(id);
    res.json({ message: "Pasa eliminada" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar la pasa");
  }
};
const getPasasConPeliculasPorCine = async (req, res) => {
  const id_cine = req.params.id_cine;

  try {
    const pasas = await Pasa.find({ id_cine }).populate("id_pelicula");
    res.json(pasas);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener las pasas con películas por cine");
  }
};
/* const getCinesConPeliculas = async (req, res) => {
  try {
    const result = await Pasa.aggregate([
      {
        $group: {
          _id: "$id_cine",
          peliculas: { $push: "$id_pelicula" }
        }
      },
      {
        $lookup: {
          from: "cines", // Nombre de la colección "cines"
          localField: "_id",
          foreignField: "_id",
          as: "cine"
        }
      },
      {
        $project: {
          _id: 1,
          cine: { $arrayElemAt: ["$cine", 0] },
          peliculas: 1
        }
      }
    ]);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los cines con películas");
  }
}; */
const getCinesConPeliculas = async (req, res) => {
  try {
    const result = await Pasa.aggregate([
      {
        $group: {
          _id: "$id_cine",
          peliculas: { $push: "$id_pelicula" },
          hora: { $push: "$hora" },
        },
      },
      {
        $lookup: {
          from: "cines",
          localField: "_id",
          foreignField: "_id",
          as: "cine",
        },
      },
      {
        $lookup: {
          from: "peliculas",
          localField: "peliculas",
          foreignField: "_id",
          as: "peliculasInfo",
        },
      },
      {
        $project: {
          _id: 1,
          cine: { $arrayElemAt: ["$cine", 0] },
          peliculas: "$peliculasInfo",
          hora: 1,
        },
      },
    ]);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los cines con películas");
  }
};



module.exports = {
  createPasa,
  getPasas,
  deletePasa,
  getPasasConPeliculasPorCine,
  getCinesConPeliculas,
};
