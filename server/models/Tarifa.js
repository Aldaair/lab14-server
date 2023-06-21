const { Schema, model } = require("mongoose");

const TarifaSchema = new Schema({
  dia: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});

module.exports = model("Tarifa", TarifaSchema);
