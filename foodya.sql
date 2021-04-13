/*
    We can easily copy/paste our MySql database schema into this file, to easily access data
    we're working with when we Query. It helps prevent having to constantly look back at our 
    schema in MySql.
*/

CREATE SCHEMA foodya;
USE foodya;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(75) NOT NULL UNIQUE,
	password VARCHAR(200) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);

CREATE TABLE vendors (
	id INT NOT NULL AUTO_INCREMENT,
    businessname VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(75) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);

CREATE TABLE business (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    image_url VARCHAR(2083) NULL,
    phone VARCHAR(20) NULL,
    display_phone VARCHAR(20) NULL,
    rating INT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    vendorid INT NOT NULL,
    categoriesid INT NOT NULL,
    locationid INT NOT NULL,
    hoursid INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (vendorid) REFERENCES vendors (id) ON DELETE CASCADE,
    FOREIGN KEY (categoriesid) REFERENCES categories (id) ON DELETE CASCADE,
	FOREIGN KEY (locationid) REFERENCES location (id) ON DELETE CASCADE,
	FOREIGN KEY (hoursid) REFERENCES hours (id) ON DELETE CASCADE
);


CREATE TABLE categories (
	id INT NOT NULL AUTO_INCREMENT,
    alias VARCHAR(20) NOT NULL,
    title VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE location (
	id INT NOT NULL AUTO_INCREMENT,
    address VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    zip_code VARCHAR(5) NOT NULL,
    country VARCHAR(2) NOT NULL,
    state VARCHAR(2) NOT NULL,
    display_address VARCHAR(100) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE hours (
	id INT NOT NULL AUTO_INCREMENT,
    is_overnight BOOLEAN,
    start VARCHAR(45) NULL,
    end VARCHAR(45) NULL,
    hours_type VARCHAR(25),
    is_open_now BOOLEAN,
    PRIMARY KEY (id)
);

CREATE TABLE reviews (
	id INT NOT NULL AUTO_INCREMENT,
	userid INT NOT NULL,
    businessid INT NOT NULL,
    starreview INT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (businessid) REFERENCES business (id) ON DELETE CASCADE,
    FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE tags (
	id INT NOT NULL AUTO_INCREMENT,
    tagname VARCHAR(30) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);


CREATE TABLE trucktags (
	tagid INT NOT NULL,
	businessid INT NOT NULL,
    PRIMARY KEY (tagid, businessid),
    FOREIGN KEY (tagid) REFERENCES tags (id) ON DELETE CASCADE,
    FOREIGN KEY (businessid) REFERENCES business (id) ON DELETE CASCADE
);


CREATE TABLE usertags (
	tagid INT NOT NULL,
    userid INT NOT NULL,
    PRIMARY KEY (tagid, userid),
    FOREIGN KEY (tagid) REFERENCES tags (id) ON DELETE CASCADE,
    FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE
);


SELECT * FROM users;
SELECT * FROM vendors;
SELECT * FROM business;
SELECT * FROM categories;
SELECT * FROM location;
SELECT * FROM hours;
SELECT * FROM reviews;
SELECT * FROM tags;
SELECT * FROM trucktags;
SELECT * FROM usertags;
CALL spBusinessTags(2);
CALL spUserTags(1);


INSERT INTO users (username, email, password) VALUE
('testing123', 'test@gmail123.com', 'password123');

INSERT INTO vendors (businessname, email, password) VALUE 
('testingvendor123', 'testvenderemail@gmail.com', 'vendorpassword123');

INSERT INTO business (name, image_url, phone, display_phone, rating, vendorid, categoriesid, locationid, hoursid) VALUE
('businessname123', 'An Image URL goes here', '205-1234-567', '205-1234-567', 5, 2, 1, 1, 1);

INSERT INTO categories (alias, title) VALUE 
('asian', 'asian');

INSERT INTO location (address, city, zip_code, country, state, display_address) VALUE
('123 random street', 'Birmingham', '35205', 'US', 'AL', '123 random street, Birmingham, AL 35205');

INSERT INTO hours (is_overnight, start, end, hours_type, is_open_now) VALUE
(TRUE, '9AM', '5PM', 'business hours', TRUE);

INSERT INTO reviews (starreview, content, userid, businessid) VALUE
(5, 'I am a user who is giving a review of this food truck!', 1, 2);

INSERT INTO tags (tagname) VALUE 
('texmex');

INSERT INTO trucktags (tagid, businessid) VALUE
(3, 5);

INSERT INTO usertags (tagid, userid) VALUE 
(3, 5);

DELIMITER //
CREATE PROCEDURE spBusinessTags(businessid INT)
BEGIN
	SELECT tags.id, tags.tagname FROM trucktags
    JOIN tags on tags.id = trucktags.tagid
    WHERE businessid = businessid;
END //
DELIMITER ; 

DELIMITER //
CREATE PROCEDURE spUserTags(userid INT)
BEGIN
	SELECT tags.id, tags.tagname FROM usertags
    JOIN tags on tags.id = usertags.tagid
    WHERE userid = userid;
END //
DELIMITER ; 


SELECT reviews.*, users.username FROM reviews JOIN users on users.id = reviews.userid;
SELECT business.*, location.address, location.city, location.zip_code, location.country, location.state, hours.hours_type, hours.is_overnight, hours.start, hours.end, hours.hours_type, hours.is_open_now FROM business JOIN location ON location.id = business.locationid JOIN hours ON hours.id = business.hoursid;
SELECT users.username, users.email, users.password FROM users;
SELECT vendors.email, vendors.password FROM vendors;


CREATE USER 'foodya_app'@'localhost' IDENTIFIED WITH mysql_native_password BY 'foodya_app_pw';
GRANT ALL PRIVILEGES ON foodya.* TO 'foodya_app'@'localhost';
FLUSH PRIVILEGES;