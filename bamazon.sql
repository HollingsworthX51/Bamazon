DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(12,2) NULL,
  stock_quantity INT(45) NULL,  
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Crabs Against Humidity", "toys and games", 15.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playstation", "video games", 499.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("blender", "electronics", 249.00, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("space heater", "electronics", 169.00, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mp3 player", "electronics", 98.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("legos", "toys and games", 47.99, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("wireless mouse", "electronics", 120.49, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("red sweatshirt", "clothing", 23.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("black pants", "clothing", 10.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dark Souls III", "video games", 59.99, 3);