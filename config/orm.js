let connection = require("./connection");
// performs the database queries to send back to burger through the cb function.
let sqlQueries = {
  selectAll: function(table, callback) {
    connection.query(`SELECT * FROM ??`, [table], function(err, result) {
      if (err) {
        throw err;
      } else {
        callback(result);
      }
    });
  },
  add: function(table, newBurger, callback) {
    connection.query(
      `INSERT INTO ?? (burger_name) VALUES(?)`,
      [table, newBurger],
      function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      }
    );
  },
  update: function(table, id, callback) {
    connection.query(
      `UPDATE ?? SET devoured=true WHERE id=?;`,
      [table, id],
      function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      }
    );
  }
};

module.exports = sqlQueries;
