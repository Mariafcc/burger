### Schema
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL UNSIGNED,
    burger_name VARCHAR (100) NOT NULL,
    devoured VARCHAR(100) BOOLEAN,
    PRIMARY KEY (id)
)

