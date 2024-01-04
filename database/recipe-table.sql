use craftcocktail;

CREATE TABLE recipe (
    id INT PRIMARY KEY AUTO_INCREMENT,
    recipe_name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    preparation_description TEXT NOT NULL,
    difficulty INT CHECK (difficulty BETWEEN 1 AND 5),
    category_id INT,
    time TIME NOT NULL,
    cost VARCHAR(50) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(id)
);