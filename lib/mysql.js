var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cddd",
  database: "side1_waffle",
});
db.connect();

module.exports = db;
