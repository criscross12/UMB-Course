const {Router} = require('express');
const router = Router();

const {renderIndex,renderFormFiles,uploadfile,download,unlink} = require('../controllers/Student.controller');
router.get('/Alumno/Files',renderFormFiles);
router.post('/Alumno/add',uploadfile);
router.get('/Alumno/index',renderIndex);
router.get('/download/:id',download)
router.get('/delete/:id',  unlink)
module.exports = router;