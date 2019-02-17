//   mysql package and connections
let mysql = require("mysql");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "bootcamp",
  database: "burgers_db"
});

module.exports = connection;
