-- creating a new table
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

INSERT INTO `customer` (`id`, `name`, `address`, `phone`) VALUES
(1,	'Ribamar FS',	'Rua Vasco',	'344343');

