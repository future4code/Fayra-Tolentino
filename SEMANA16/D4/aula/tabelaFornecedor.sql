-- tabela de fornecedor
CREATE TABLE relational_supplier (
 id VARCHAR(255) PRIMARY KEY,
 name VARCHAR(255),
 gender ENUM('male', 'female')
);
INSERT INTO relational_supplier
VALUES
('c', 'Coragem', 'male'),
('d', 'Dory', 'female');
SELECT * FROM relational_supplier;