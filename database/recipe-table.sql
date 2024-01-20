use craftcocktail;

CREATE TABLE `recipe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `ingredients` text NOT NULL,
  `preparation_description` text NOT NULL,
  `difficulty` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `time` time NOT NULL,
  `cost` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `recipe_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `recipe_chk_1` CHECK ((`difficulty` between 1 and 5))
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci