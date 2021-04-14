CREATE DATABASE IF NOT EXISTS company;
DROP DATABASE company;
use company;

CREATE TABLE employees (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);
drop table employees;
DESCRIBE employees;
SELECT * FROM employees;

INSERT INTO employees values
	(1, 'Ryan Ray', 20000),
    (2, 'Joe McMilan', 40000),
    (3, 'John Carter', 50000);