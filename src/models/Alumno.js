const {Schema,model} = require('mongoose');
const bcrypt = require('bcryptjs');
const AlumnoSchema = new Schema({
    nombre: {
        type: String,
        required: true 
    },
    ap_paterno:{
        type: String,
        requeried: false
    },
    ap_materno:{
        type: String,
        required: true
    },
    matricula:{
        type:Number,
        required:true
    }, 
    password:{
        type: String,
        requeried: true
    },
    semestre: {
        type: String,
        requiered: true
    },
    carrera: {
        type: String,
        requiered: true
    }   
},{
    timestamps: true
});

// AlumnoSchema.method.encryPassword = async password => {
//     const salt = await bcrypt.genSalt(10);
//     return await bcrypt.hash(password,salt);
// };

// AlumnoSchema.methods.matchPassword = function(password) {
//     return await bcrypt.compare(password,this.password)
// };

module.exports= model('Alumno',AlumnoSchema);