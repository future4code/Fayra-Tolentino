-- tabela de usuário
CREATE TABLE relational_user (
 id VARCHAR(255) PRIMARY KEY,
 name VARCHAR(255),
 gender ENUM('male', 'female')
);
INSERT INTO relational_user VALUES
('a', 'Alice', 'female'),
('b', 'Bob', 'male');
SELECT * FROM relational_user;