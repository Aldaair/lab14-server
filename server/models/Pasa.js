const { Schema, model } = require("mongoose");

const PasaSchema = new Schema({
  hora: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  id_cine: {
    type: Schema.Types.ObjectId,
    ref: "Cine",
  },

  id_pelicula: 
    {
      type: Schema.Types.ObjectId,
      ref: "Pelicula",
    },
  
});

module.exports = model("Pasa", PasaSchema);
