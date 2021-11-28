const {Router} = require('express');
const routerT = Router();
const {rederTeachers,renderSub} = require('../controllers/teachers.controller');

routerT.get('/teachers',rederTeachers);
routerT.get('/subjects',renderSub);

module.exports = routerT;