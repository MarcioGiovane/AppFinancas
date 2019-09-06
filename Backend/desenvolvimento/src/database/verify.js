const connection = require('./connectionFactory');

module.exports = {

  hasConection() {

    const conn = connection();

    // Testing the connection
    conn.connect(function(err) {
      if (err) {
       console.log('Log: No Database Connection...');
       process.exit();
      }
      console.log("Log: Database Connected!");
    });

  }
};
