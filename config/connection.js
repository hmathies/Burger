// Connecting Node to MySQL
var mysql = require("mysql2");


var connection;

if (process.env.JAWSDB_URL) {
  // DB is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // DB is local on localhost
  connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  })
};


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("MySQL connection error: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database as id " + connection.threadId);
});


module.exports = connection;
//
