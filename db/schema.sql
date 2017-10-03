-- Create database
DROP DATABASE IF EXISTS projects_db;
CREATE DATABASE projects_db;
USE projects_db;

-- Create table
CREATE TABLE projects (
  id INT NOT NULL AUTO_INCREMENT,
  project_name VARCHAR(255) NOT NULL,
  complete BOOLEAN DEFAULT false,
  DATE TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
