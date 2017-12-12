// npm
var mysql = require("mysql");
var inquirer = require('inquirer');

// establish connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    //  username
    user: "root",

    //  password
    password: "root",
    database: "bamazon"
});