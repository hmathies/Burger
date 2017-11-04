// Import MySQL connection.
var connection = require("../config/connection.js");

/* In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

  * `selectAll()`
  * `insertOne()`
  * `updateOne()`
*/


// Object for all our SQL statement functions.
var orm = {
  all: function(burgers, cb) {
    var queryString = "SELECT * FROM " + burgers + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(burgers, burger_name, vals, cb) {
    var queryString = "INSERT INTO " + burgers;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printBurgerName(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(burgers, objColVals, condition, cb) {
    var queryString = "UPDATE " + burgers;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
