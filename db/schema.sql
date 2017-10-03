-- Create database
DROP DATABASE IF EXISTS projects_db;
CREATE DATABASE projects_db;
USE projects_db;

-- Create table
CREATE TABLE projects (
  id INT NOT NULL AUTO_INCREMENT,
  project_name VARCHAR(255),
  in_progress TINYINT(0),
  complete TINYINT(1),
  PRIMARY KEY (id)
);
