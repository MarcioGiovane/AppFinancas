// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./config/api.json');
const bd = require('./database/verify');

// Framework
const app = express();

// Enabling JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Checking Database connection
bd.hasConection();

// Enabling controllers
require('./app/controllers/index')(app);

// Running Server
app.listen(api.port, () => console.log(`Log: Server Running in http://${api.url}:${api.port}`));
