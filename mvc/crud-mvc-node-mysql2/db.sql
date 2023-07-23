CREATE TABLE users(
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nome VARCHAR(50),
  sobre VARCHAR(50),
  idade INT
);
    
INSERT INTO users (nome, sobre, idade ) VALUES ("Ribamar", "FS", 66);
    
