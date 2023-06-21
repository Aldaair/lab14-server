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
  id_cine: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cine",
    },
  ],
});

module.exports = model("Tarifa", TarifaSchema);
