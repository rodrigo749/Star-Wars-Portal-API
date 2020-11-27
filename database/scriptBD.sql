CREATE TABLE characters(
	id INTEGER PRIMARY KEY IDENTITY,
	name_char VARCHAR(255) NOT NULL,
	age INTEGER NOT NULL,
)

// se for utilizar MYSQL
CREATE TABLE characters(
	id int (11) NOT NULL AUTO_INCREMENT,
	name_char VARCHAR(255),
	age int
)