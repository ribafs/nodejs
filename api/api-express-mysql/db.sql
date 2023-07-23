CREATE TABLE `customers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `customers` (`id`, `name`, `email`, `created_at`, `updated_at`) VALUES
(1,	'Ribamar FS',	'ribafs@gmail.com',	'2022-11-16 20:29:05',	'2022-11-16 20:29:05'),
(2,	'Elias',	'elias@gmail.com',	'2022-11-16 20:36:09',	'2022-11-16 20:36:09'),
(3,	'Tiago Ferreira',	'tiago@tiago.com',	'2022-11-16 22:43:52',	'2022-11-16 22:45:23');
