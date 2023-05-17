var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var contactsRouter = require('./routes/contacts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
    origin: ['http://localhost:5000', 'http://localhost:3000']
};

app.use(cors(corsOptions));

app.use('/contacts', contactsRouter);

module.exports = app;
