const { Schema, model } = require("mongoose");

const CineSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  calle: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
});


module.exports = model('Cine', CineSchema)