const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

const routes = require('./routes');

const server = express();

// mongoose.connect('mongodb+srv://sidnei:senha@cluster0-guiap.mongodb.net/omnistack8?retryWrites=true&w=majority', {
//   useNewUrlParser: true
// });

// Liberando o App para ser acessado por qualquer IP.
// server.use(cors());
// habilitando json no express.
server.use(express.json());
// adicionando rotas de ./routes
server.use(routes);

server.listen(3000, () => console.log('Server Running: http://localhost:3000'));
