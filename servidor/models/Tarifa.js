const { Schema, model } = require("mongoose");

const TarifaSchema = new Schema({
  id_tarifa: {
    type: String,
    required: true,
  },
  dia: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});

module.exports = model('Tarifa', TarifaSchema)

