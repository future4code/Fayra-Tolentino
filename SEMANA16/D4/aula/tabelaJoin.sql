-- tabela de join para juntar a tabela de usuário e de conta/compras 
SELECT *
FROM relational_user
JOIN relational_account
-- condição de correspondência entre as tabelas para não misturar linhas entre si
ON relational_account.user_id =
relational_user.id;