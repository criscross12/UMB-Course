const mongoose = require('mongoose');
const {UMB_APP_HOST,UMB_APP_DATABASES} = process.env;
const MONGODB_URI = `mongodb://${UMB_APP_HOST}/${UMB_APP_DATABASES}`;

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('Database is connected'))
    .catch(err => consolo.log(err));