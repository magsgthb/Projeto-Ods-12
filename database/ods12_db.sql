CREATE USER 'ods12'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

GRANT ALL PRIVILEGES ON *.* TO 'ods12'@'localhost';

CREATE DATABASE ods12_db;

USE ods12_db;

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  valor DECIMAL(10,2),
  descricao TEXT,
  fornecedor VARCHAR(100),
  email VARCHAR(100),
  telefone VARCHAR(20)
);
SHOW TABLES;
SELECT * FROM produtos;
