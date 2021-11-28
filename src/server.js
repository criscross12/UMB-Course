const express = require("express");
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const Ove = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const multer = require("multer");
const storage =multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename: (req,file,cb)=>{
        cb(null,Date.now()+'_'+file.originalname)
    }
});
//ini
const app = express();
//sett
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts' ),
    partialsDir:  path.join(app.get('views'), 'partials' ),
    extname: '.hbs'
}));
app.set('view engine','.hbs');
//middlewares
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(Ove('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
app.use(multer({
    storage,
    dest :  path.join(__dirname, 'public/uploads/')
}).single('image'));

//global vars
app.use((req,res,next) =>{
    res.locals.success_msg = req.flash('success_msg');
    next();
});
//routes
app.use(require('./route/index.routes'));
app.use(require('./route/SchoolC.routes'));
app.use(require('./route/teachers.routes'));
app.use(require('./route/students.routes'));
//static files
app.use(express.static(path.join(__dirname,'public')));

module.exports = app;