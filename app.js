require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var app = express();
const cors = require('cors');

require('./server/configs/redis');
require('./server/configs/mongoose');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//require('./server/api')(app);

app.all('/*', function(req, res, next) {
    return res.status(404).json({message: "No handler for your request exists"});
})

// error handler
app.use(function(err, req, res, next) {
    console.log(err);
    return res.status(500).json({message: "Unhandled internal error"});
});

module.exports = app;