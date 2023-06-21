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
const getTarifaById = async (req, res) => {
  const { id } = req.params;
  try {
    const tarifa = await Tarifa.findById(id);
    res.json(tarifa);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener la película");
  }
};
const actualizarTarifa = async (req, res) => {
  const { id } = req.params;
  const { dia, precio } = req.body;

  try {
    const tarifa = await Tarifa.findByIdAndUpdate(
      id,
      {
        dia,
        precio,
      },
      { new: true }
    );

    res.json(tarifa);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar la tarifa");
  }
};
const eliminarTarifa = async (req, res) => {
  const { id } = req.params;
  try {
    await Tarifa.findByIdAndDelete(id);
    res.json({ message: "Tarifa eliminada" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar la Tarifa");
  }
};
module.exports = {
  getTarifas,
  createTarifa,
  getTarifaById,
  actualizarTarifa,
  eliminarTarifa
};
