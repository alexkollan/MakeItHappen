const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const index = require('./index');
const screen1 = require('./screen1');
const screen2 = require('./screen2');
const screen3 = require('./screen3');
const screen4 = require('./screen4');
const screen6 = require('./screen6');
const screen7 = require('./screen7');

app.listen(port, () => {
    console.log(`The app is running on port: ${port}`);
});

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

app.get('/', index.controller);
app.get('/screen1', screen1.controller);
// app.get('/screen2', screen2.controller);
app.get('/screen3', screen3.controller);
app.get('/screen4', screen4.controller);
app.get('/screen6', screen6.controller);
app.get('/screen7', screen7.controller);

app.post('/screen2', screen2.controller);