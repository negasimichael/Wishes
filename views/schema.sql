DROP DATABASE IF EXISTS wishes_db;
CREATE DATABASE wishes_db;

USE wishes_db;

CREATE TABLE wishes (
	id INT(100) NOT NULL AUTO_INCREMENT,
    wish VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO wishes (wish) VALUES ("Wish 1");
INSERT INTO wishes (wish) VALUES ("Wish 2");
INSERT INTO wishes (wish) VALUES ("Wish 3");

SELECT *FROM wishes;