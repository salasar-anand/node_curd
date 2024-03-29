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

// app.use(cors({ 'origin': '*' }));
app.get('/', function (req, res) {
    res.send('This is the Home Page');
});
 
//
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/uploads', express.static('uploads'));
app.use('/api', require('./routes/app.route'));
app.use(error.errorHandler);


app.listen(process.env.port || 4000, function () {
    console.log("Ready To Go localhost 4000");
});


