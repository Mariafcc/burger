var connection = require("../config/connection.js");
var orm = {
     selectAll: () => {
        selectWhere: function() {
            var queryString = "SELECT * FROM ?? WHERE ?? = ?";
            connection.query(queryString, [], function(err, result) {
            if (err) throw err;
            console.log(result);
            });
        },
    },

    insertOne: () => {

    },

    updateOne:
}

module.exports = orm;
