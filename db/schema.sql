CREATE DATABASE shopping_db;
USE shopping_db;

CREATE TABLE items
(
	id int NOT NULL AUTO_INCREMENT,
	item_name varchar(255) NOT NULL,
	purchased BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);