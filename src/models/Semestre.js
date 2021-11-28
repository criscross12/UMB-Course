const { Schema, model } = require("mongoose");
const SemestreSchema = new Schema(
  {
    Nombre_semestre: String,
  });
module.exports = model("Semestres", SemestreSchema,"Semestres");
