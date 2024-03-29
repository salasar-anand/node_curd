const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGO_DB_CONFIG } = require("./config/app.config");
const error = require("./middleware/errors");
var cors = require('cors')

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_DB_CONFIG.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(
    () => {
        console.log("Data base Connected");
    }, (error) => {
        console.log("DataBase can't be connected: " + error);
    }
);

app.use(cors({ 'origin': '*' }));
app.get('/', function (req, res) {
    res.send('This is the Home Page');
});
 
//
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api', require('./routes/app.route'));
app.use(error.errorHandler);


app.listen(process.env.port || 4000, function () {
    console.log("Ready To Go localhost 4000");
});


