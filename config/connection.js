//   mysql package and connections
let mysql = require("mysql");
var connection = mysql.createConnection(process.env.JAWSDB_URL);

// {
//   host: "pwcspfbyl73eccbn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     port: 3306,
//       user: "npt7mpc0t3wc5dzv",
//         password: "be4u6rundpj2gkd4",
//           database: "kwd80ib9242z1vr7"
// }
module.exports = connection;
