var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var up = require('./routes/up');
var crud = require('./routes/crud');
var main = require('./routes/main');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/up', up);
app.use('/main', main);

module.exports = app;
