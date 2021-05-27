SELECT relational_user.name, relational_product.name AS
'product'
-- primeiro join juntar produtos e usuários 
FROM relational_sale
JOIN relational_user
ON user_id = relational_user.id
-- segundo join faz referencia as informações de produtos 
JOIN relational_product
ON product_id = relational_product.id;