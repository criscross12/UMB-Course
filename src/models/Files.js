const {Schema,model} = require('mongoose');

const FilesSchema = new Schema({
  nombre_archivo:{
    type: String,
    required: true
  },
  route:{
    type: String,
    required: true   
  }},{
    timestamps: true
});

module.exports= model('T_Archivos',FilesSchema, 'T_Archivos');