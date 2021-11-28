const {Router} = require('express');
const router = Router();

const {renderStudentForm,createNewStudent,renderUpdateStudent,renderStudent,UpdateStudent,deleteStudent,renderIndex,renderProfile} = require('../controllers/SchoolC.controller');
//STUDENTS CREATE
router.get('/students/createStudent',renderStudentForm);
router.post('/students/add',createNewStudent);
//GET ALL STUDENTS 
router.get('/students',renderStudent);
//UPDATE STUDENTS
router.get('/students/update/:id',renderUpdateStudent);
router.put('/students/update/:id',UpdateStudent);
//Delete Students
router.delete('/students/delete/:id',deleteStudent);

//other
router.get('/students/index',renderIndex);
router.get('/students/perfil',renderProfile);
module.exports = router;