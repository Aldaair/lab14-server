const Tarifa = require("../models/Tarifa");

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
const createTarifa = async (req, res) => {
  const { dia, precio } = req.body;
  console.log("ASD");
  console.log(dia, precio);
  try {
    const tarifa = new Tarifa({ dia, precio });
    await tarifa.save();
    res.json({ message: "tarifa creado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

module.exports = {
  getTarifas,
  createTarifa,
};
