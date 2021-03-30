/*
    We can easily copy/paste our MySql database schema into this file, to easily access data
    we're working with when we Query. It helps prevent having to constantly look back at our 
    schema in MySql. Below is the database I made to boilerplate our project, obviously it's just an ~example~
*/

USE example;

CREATE TABLE examples (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
	locationid INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (locationid) REFERENCES locationexamples (id)
);

CREATE TABLE locationexamples (
	id INT NOT NULL AUTO_INCREMENT,
    location VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY (id)
);

SELECT * FROM examples;
SELECT * FROM locationexamples;

INSERT INTO examples (locationid, name, content) VALUE 
(1, 'Reagan', 'THE DATABASE IS HOOKED UP TO THE SERVER, LETS GOOOOOO');

INSERT INTO locationexamples (location) VALUE 
('Birmingham');

SELECT examples.*, locationexamples.location FROM examples JOIN locationexamples ON locationexamples.id = examples.locationid;
