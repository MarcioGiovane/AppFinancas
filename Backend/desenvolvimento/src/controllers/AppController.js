// const axios = require('axios');
// Importando Schema
// const Dev = require('../models/Dev');

module.exports = {
  index(req, res) {
    return res.json({ 'Servidor' : 'Running'});
  },
};
