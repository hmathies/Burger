// Connecting Node to MySQL
var mysql = require("mysql");

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
// mysql://ivrbdyi8mjlu694x:ikpen0oqwwbetds3@nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/p00btgf1s5z2p6db
// JAWSDB_URL='mysql://ivrbdyi8mjlu694x:ikpen0oqwwbetds3@nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/p00btgf1s5z2p6db'
// var connection = mysql.createConnection({
//
//   host: "nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306",
//   user: "ivrbdyi8mjlu694x",
//   password: "ikpen0oqwwbetds3",
//   database: "p00btgf1s5z2p6db"
// });
