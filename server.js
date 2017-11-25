const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const index = require('./index');

app.listen(port, () => {
    console.log(`The app is running on port: ${port}`);
});

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

app.get('/', index.controller)