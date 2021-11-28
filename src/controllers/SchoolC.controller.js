const SchoolCtrl = {};
const Alumno = require('../models/Alumno');
const Carreras = require('../models/Carreras');
const file = require('../models/Files');
const CE = require('../models/CE');
const Semestre = require('../models/Semestre');
SchoolCtrl.renderStudentForm = async (req,res)=>{
    const carreras = await Carreras.find().lean();
    const semestre = await Semestre.find().lean();
    console.log(semestre);
    //console.log(carreras);
    res.render('ControlEscolar/newStudents',{carreras,semestre});   
};
//Create new student
SchoolCtrl.createNewStudent = async(req,res)=>{
    const {nombre,ap_paterno,ap_materno,matricula,password,semestre,carrera} = req.body;
    // console.log(req.body);
    const newAlumno = new Alumno({nombre , ap_paterno, ap_materno, matricula, password, semestre,carrera});
    console.log(newAlumno);
    await newAlumno.save();
    req.flash('success_msg', 'Estudiante agregado satisfactoriamente' );
    res.redirect('/students');
};

//Renders
SchoolCtrl.renderIndex = (req, res)=>{
    res.render('ControlEscolar/indexCE');
};
SchoolCtrl.renderProfile = async (req,res)=>{
    //const profile = new CE({Nombre, Ap_paterno, Ap_materno, matricula, password});
    const profile = await CE.find().lean();
    console.log(profile);
    res.render('ControlEscolar/profile',{profile});
};
//UPDATE 
SchoolCtrl.renderUpdateStudent = async(req,res) =>{
    const alumno = await Alumno.findById(req.params.id).lean();
    res.render('ControlEscolar/edit-student',{alumno})
};
SchoolCtrl.UpdateStudent = async (req,res) =>{
    const {nombre,ap_paterno,ap_materno,matricula,password,carrera,semestre} = req.body;

    await Alumno.findByIdAndUpdate(req.params.id,{nombre,ap_paterno,ap_materno,matricula,password,carrera,semestre} );
    req.flash('success_msg', 'Estudiante Actualizado satisfactoriamente' );
    res.redirect('/students');
};
SchoolCtrl.renderStudent = async(req,res)=>{
    const alumnos = await Alumno.find().lean();
    const f = await file.find().lean();
    res.render('ControlEscolar/allStudents',{alumnos,f});
}
SchoolCtrl.deleteStudent = async(req,res)=>{
    await Alumno.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'Estudiante eliminado satisfactoriamente' );
    res.redirect('/students');
};


module.exports = SchoolCtrl;