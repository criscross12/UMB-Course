const { Schema, model } = require("mongoose");
const CarrerasSchema = new Schema(
  {
    Nombre_carrera: String,
  });
module.exports = model("Carreras", CarrerasSchema,"Carreras");
