var connection = require("../config/connection.js");
var orm = {
  selectAll: (tableInput) => {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: () => {},

  updateOne: (cb) => {
    var queryString = "UPDATE ";

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

module.exports = orm;
