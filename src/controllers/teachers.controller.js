const teacherCtrl = {}

teacherCtrl.rederTeachers = (req,res)=>{
    res.render('ControlEscolar/teachers');
};
teacherCtrl.renderSub = (req,res)=>{
    res.render('ControlEscolar/subjects');
};
module.exports = teacherCtrl;