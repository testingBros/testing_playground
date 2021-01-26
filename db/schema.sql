DROP DATABASE IF EXISTS testing_playground;

CREATE DATABASE testing_playground;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  age int,
  height varchar(10),
  username varchar(20)
);