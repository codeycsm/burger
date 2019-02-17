//   mysql package and connections
let mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "<YOUR USERNAME HERE>",
    password: "<YOUR PASSWORD HERE>",
    database: "burgers_db"
  });
}

connection.connect();

module.exports = connection;
