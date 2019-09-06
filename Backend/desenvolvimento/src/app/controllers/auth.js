const express = require('express');
const connection = require('../../database/connectionFactory');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const authConfig = require('../../config/auth.json');

const router = express.Router();

function generateToken(params = {}) {

  /**
   * (?) Como funciona, enviando 3 parâmetros:
   * • (id) que é único do usuário
   * • (hash) da aplicação
   * • Quando vai expirar
   */

  return jwt.sign(params, authConfig.secret, {
     expiresIn: 86400,
  });
}

// ROTAS

// Test
router.get('/', (req, res) => {

  const conn = connection();

  const query = 'SELECT * FROM client';

  conn.query(query, function(err, results){
    if (err) throw err
      //res.status(400).json(err);

    res.send({ "data": results });
    conn.end();
  });

});

/** 1. Created User */
router.post('/register', (req, res) => {

  const { name, cpf, email } = req.body;

  const querySearch = `SELECT * FROM client WHERE cpf='${cpf}'`;

  const conn = connection();

  // Filter CPF
  conn.query(querySearch, async(err, result) => {

    if (err)
      res.status(400).json({ error: 'Connection in Database'});

    if (result.length > 0) {
      console.log("Log (/auth/register): CPF already exists");
      res.status(400).json({ error: 'CPF already exists'});
    }else{
      // Create user

      // Password Hash
      const password = await bcrypt.hashSync(req.body.password, 10);

      const queryInsert = `INSERT INTO client(name, cpf, email, password) VALUES('${name}','${cpf}','${email}','${password}')`;

      conn.query(queryInsert, (err, result) => {
        if (err)
          res.status(400).json({ error: 'Connection in Database'});

        console.log("Log (/auth/register): Add User");

        const id = result.insertId;

        res.send({
          id,
          token: generateToken({ id: id }),
        });

      });
    }
    conn.end();
  });

});

/** 2. Authenticate User */
router.post('/authenticate', async (req, res) => {

  const { cpf, password } = req.body;

  const querySearch = `SELECT * FROM client WHERE cpf='${cpf}'`;

  const conn = connection();

  // Filter CPF
  conn.query(querySearch, async(err, result) => {

    if (err)
      res.status(400).json({ error: 'Connection in Database'});

    if (result.length == 1) {

      //if (result[0].password == bcrypt.hashSync(password, 10)) {
      if (await bcrypt.compare(password, result[0].password)) {
        console.log("Log (/auth/authenticate): User authenticate");

        const id = result[0].pk_client;

        res.send({
          id,
          token: generateToken({ id: id }),
        });
        //res.json(result[0]);
      }else{
        console.log("Log (/auth/authenticate): Password wrong");
        res.status(401).json({ error: 'Password wrong' });
      }

    }else{
      console.log("Log (/auth/authenticate): User not exist");
      res.status(400).json({ error: 'User not exist' });
    }
    conn.end();
  });

});

module.exports = app => app.use('/auth', router);
