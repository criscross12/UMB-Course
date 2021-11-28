require('dotenv').config();
const app = require('./server');
require('./database');
// console.log(process.env.TEST);
app.listen(app.get('port'), ()=>{
    console.log("Server on:", app.get('port'));
});