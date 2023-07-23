CREATE TABLE `produto` (
  `produto_id` int(11) NOT NULL AUTO_INCREMENT,
  `produto_nome` varchar(50) NOT NULL,
  `produto_preco` int(11) NOT NULL,
  PRIMARY KEY (`produto_id`)
);

INSERT INTO `produto` (`produto_id`, `produto_nome`, `produto_preco`) VALUES
(1,	'produto 1',	2000),
(2,	'produto 2',	2000),
(3,	'produto 3',	3000),
(4,	'produto 4',	2000),
(5,	'produto 5',	1500);

