const mysql = require('mysql');
const db = require('../config/db.json');

module.exports = function() {

  const { host, port, user, password, database } = db;

  const conn = mysql.createConnection({
    host,
    port,
    user,
    password,
    database
  });

  return conn;
};
