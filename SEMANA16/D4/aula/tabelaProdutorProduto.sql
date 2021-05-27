-- tabela de 1:n  tabela de produtor e produtos fornecidos
CREATE TABLE relational_product (
 id VARCHAR(255) PRIMARY KEY,
 name VARCHAR(255) UNIQUE,
 price FLOAT,
 supplier_id VARCHAR(255),
 -- nova coluna de id (supplier_id ) que irá referenciar o id da tabela de fornecedor relational_supplier(id)
 FOREIGN KEY (supplier_id ) REFERENCES relational_supplier(id)
);
INSERT INTO relational_product VALUES 
('okm','cenoura' , 10.00, 'c'),
('uhb','abacate', 11.50, 'c'),
('ygv','cebola', 12.00, 'c'),
('ijn','camarão', 21.50, 'd'),
('tfc','lula', 22.00, 'd');
SELECT * FROM relational_product;