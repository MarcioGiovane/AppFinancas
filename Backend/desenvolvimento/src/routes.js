const express = require('express');

// Adicionando Controllers
const AppController = require('./controllers/AppController');
const UserController = require('./controllers/UserController');
const InvestmentController = require('./controllers/InvestimentController');

const routes = express.Router();

// GET, POST, PUT, DELETE

// Geral
routes.get('/', AppController.index);

// Investimento
routes.get('/investment', InvestmentController.getAll);
routes.post('/investment', InvestmentController.save);

// Usuario
routes.get('/user', UserController.getAll);
routes.get('/user/:id', UserController.find);
routes.post('/user', UserController.save);



module.exports = routes;
