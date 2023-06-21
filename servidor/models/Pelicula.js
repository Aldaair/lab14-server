const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const PeliculaSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    unique: true,
  },
  director: {
    type: String,
    required: true,
  },
  clasificacion: {
    type: String,
    required: true,
  },
  protagonista: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
});

module.exports = model('Pelicula', PeliculaSchema)

