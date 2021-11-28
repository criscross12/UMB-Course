const studentCtrl = {};
const file = require("../models/Files");
const alumno = require("../models/Alumno");
const fs = require("fs");
const paths = require('path');
studentCtrl.renderIndex = (req, res) => {
  res.render("Alumnos/index.hbs");
};
studentCtrl.renderFormFiles = async (req, res) => {
  const filx = await file.find().lean();
  res.render("Alumnos/FilesS.hbs",{filx});
};

studentCtrl.uploadfile = async (req, res) => {
  console.log(req.file);
  const { filename, path } = req.file;
  const nm = req.file.originalname;  
  const newFile = new file({ nombre_archivo: filename, route: path });
  fs.mkdir(paths.join('C:\\Users\\krist\\Pictures\\umb-js\\src\\public\\uploads\\', nm), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});
  await newFile.save();
  req.flash("success_msg", "Archivo agregado satisfactoriamente");
  res.redirect("/Alumno/Files");
};
studentCtrl.download = (req, res) => {
  res.download('C:\\Users\\krist\\Pictures\\umb-js\\src\\public\\uploads\\' + req.params.id);
};
studentCtrl.unlink = async (req, res) =>{
  const Ruta = await file.findById(req.params.id);
  fs.unlinkSync(Ruta.route);
  const delete2 = await file.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Archivo eliminado satisfactoriamente");
  res.redirect('/Alumno/Files');
}
module.exports = studentCtrl;
