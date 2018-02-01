DROP DATABASE IF EXISTS sizes_db;
CREATE DATABASE sizes_db;

USE sizes;

CREATE TABLE sizes
(
	size_id int NOT NULL AUTO_INCREMENT,
	brand varchar(255) NOT NULL,
	gender varchar(255) NOT NULL,
	size integer, NOT NULL
	inchMin integer, NOT NULL
	inchMax integer, NOT NULL
	PRIMARY KEY (size_id)
); 

