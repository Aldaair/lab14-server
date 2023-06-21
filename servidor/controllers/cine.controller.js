const Cine = require("../models/Cine");
const Tarifa = require("../models/Tarifa");
const Pelicula = require("../models/Pelicula");
const Pasa = require("../models/Pasa");

const config = require("../config/global");

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
const getTarifas = async (req, res) => {
  Tarifa.find({})
    .then((tarifas) => {
      res.json(tarifas);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error al obtener las tarifas");
    });
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
const createTarifa = async (req, res) => {
  const { id_tarifa, dia, precio } = req.body;

  try {
    const tarifa = new Tarifa({
      id_tarifa,
      dia,
      precio,
    });

    await tarifa.save();

    res.json({ message: "Tarifa creada" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
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
module.exports = {
  getCines,
  createCine,
  createTarifa,
  createPasa,
  createPelicula,
  getTarifas,
};
