const express = require('express');

// Adicionando Controllers
const AppController = require('./controllers/AppController');
// const AuthController = require('./controllers/AuthController');
const ServController = require('./controllers/ServController');

const routes = express.Router();

// GET, POST, PUT, DELETE

routes.get('/', AppController.index);
routes.post('/invest', ServController.store);


module.exports = routes;
