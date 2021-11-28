const { Schema, model } = require("mongoose");
const CESchema = new Schema(
  {
    Nombre: {
      type: String,
      required: true,
    },
    Ap_paterno: {
      type: String,
      requeried: true,
    },
    Ap_materno: {
      type: String,
      required: true,
    },
    matricula: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      requeried: true,
    }
  });
module.exports = model("CE", CESchema,"CE");
