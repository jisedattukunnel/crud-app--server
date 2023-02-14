var mysql = require("mysql");
var express = require("express");
var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwerty",
  database: "just-clean",
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database Connected");
  }
});

module.exports = con;
