-- tabela de relações usuários 
CREATE TABLE relational_account (
 id INT PRIMARY KEY,
 balance FLOAT,
 user_id VARCHAR(255),
 -- uma tabela que criará um id estrangeiro coluna a mais (user_id) , onde a referência será o id da tabela  de usuário relational_user(id)
 FOREIGN KEY (user_id) REFERENCES relational_user(id)
);
INSERT INTO relational_account VALUES
(659182, 1000.99, 'a'),
(662834, 1000.99, 'b');
SELECT * FROM relational_user;