CREATE TABLE `usuarios` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `posicao` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `usuarios` (`id`, `nome`, `email`, `posicao`) VALUES
(2,	'Ribamar',	'ribafs@gmailcom',	'Professor');

