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

connection.connect(function (err) {
    if (err) throw err;
    displayProducts();
});

//function to display product info
function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log("-----------------------------------");
            for (var i = 0; i < res.length; i++) {
                console.log(res[i].item_id + " : " + res[i].product_name + ", " + res[i].price);
            }
            console.log("-----------------------------------");
            promptCustomer();
        }
    });
};

//function that prompts customers
function promptCustomer() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) console.log(err);

        inquirer.prompt([{
                type: "input",
                message: "Please input the product ID.",
                name: "itemID",
            },
            {
                type: "input",
                message: "How many units do you need?",
                name: "quantity",
            },
        ]).then(function (answer) {
            var chosenProduct;

            for (var i = 0; i < res.length; i += 1) {
                if (res[i].item_id === parseInt(answer.itemID)) {
                    chosenProduct = res[i];
                }
            };

            if (chosenProduct.stock_quantity < parseInt(answer.quantity)) {
                console.log("\n")
                console.log("Sorry, Insufficient stock!");
                console.log("\n")
                connection.end();
            } else {
                var quantityUpdate = chosenProduct.stock_quantity - parseInt(answer.quantity);

                connection.query(
                    "UPDATE products SET ? WHERE ?", [
                        {
                            stock_quantity: quantityUpdate
                        },
                        {
                            item_id: chosenProduct.item_id
                        }
                    ],
                    function (err) {
                        if (err) {
                            console.log(err)
                        } else {
                            var totalPrice = chosenProduct.price * parseInt(answer.quantity);
                            console.log("\n")
                            console.log("--------------------------------------------------");
                            console.log("Your total is: " + totalPrice);
                            console.log("Thanks for your purchase!");
                            console.log("We only have " + quantityUpdate + " left!");
                            console.log("--------------------------------------------------");
                            console.log("\n")
                            connection.end();
                        }
                    }
                )
            }; 
        });
    });
};
