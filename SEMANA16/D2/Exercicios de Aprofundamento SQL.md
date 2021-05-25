# Exercicios de Aprofundamento SQL - 🎟 Sistema de Cinema

### 🎟 Exercício 1 - Leia os comandos abaixo e indique o que eles fazem. **Não** os rode nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder

a.

```sql
ALTER TABLE Actor DROP COLUMN salary;
```

**Resposta:**  O comando **DROP COLUMN  deleta** coluna. Portanto o comando acima irá deletar a coluna salário

### b.

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

**Resposta:**  O comando **ALTER TABLE  ele altera alguma informação da tabela.** Portanto. a query acima irá alterar a propriedade da tabela de gender para sex, e estipular uma quantidade máxima de 6 caracteres.

### c.

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

**Resposta:**  O comando **ALTER TABLE  ele altera alguma informação da tabela.** Portanto. a query acima irá alterar a propriedade da tabela de gender para gender, e estipular uma quantidade máxima de 255 caracteres.

### d.

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

---

### 🎟 Exercício 2 - No MySQL, existem mais dois operadores que nos permitiram fazer o CRUD de qualquer coisa. O primeiro deles é o `UPDATE`. A query abaixo muda o nome do ator com id `123` para `Moacyr Franco`:

```sql
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123"
```

***a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`***

Para editar duas informações ao mesmo tempo, utiliza-se  virgulas para separar as propriedades que você deseja usar

```sql
update Actor_Table set name = "Feh Montenegro", birth_date = "1929-10-29" where id = "003"
```

***b. Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.***

```sql
select upper(name) from Actor_Table  where name = "Juliana Paes";

update Actor_Table set name = "Juliana Paes"  where id = "005";
```

**c*. Escreva uma query que atualize todas as informações do ator com o id `005`.***

```sql
update Actor_Table set name = "Juh Paes", id = "008", salary = 100000 , birth_date = "1979-03-22"  where id = "005"
```

**d*. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*** 

Resposta : O erro que é recebido é :

```sql
update Actor_Table set name = "Bananilds" where id = "009";
```

### 🎟 Exercício **3.  Para finalizar o CRUD, vamos ver o D: `DELETE`. Esse operador permite deletar toda uma linha de uma tabela, seria como apagar um elemento dela.**

Por exemplo, se quisermos apagar o ator com o nome `Tony Ramos`

```sql
DELETE FROM Actor WHERE name = "Tony Ramos"
```

***a. Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`***

```sql
delete from Actor_Table where name = "Feh Montenegro";
```

***b. Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00***

```sql
delete from Actor_Table where gender ="male" and salary >100000;
```

### 🎟 **Exercício 4- Existem outras funções, tais como: `MAX` e `MIN` que permitem determinar os valores máximos e mínimos de uma coluna.**

***a. Escreva uma query que pegue o maior salário de todos os atores e atrizes***

```sql
select max(salary) from Actor_Table ;
```

**b*. Escreva uma query que pegue o menor salário das atrizes***

```sql
select min(salary) from Actor_Table where gender = "female";
```

**c. *Escreva uma query que pegue  a quantidade atrizes***

```sql
select min(salary) from Actor_Table where gender = "female";
```

***d. Escreva uma query que pegue a soma de todos os salários***

```sql
select sum(salary) from Actor_Table;
```

### 🎟 **Exercício 5-**  O último é um operador que permite agrupar os dados em relação a alguma coluna da tabela: `GROUP BY`. Ele normalmente é usado junto com algumas das funções que já vimos: `AVG`, `COUNT`, `SUM`, etc. A query abaixo retorna a quantidade de atores e atrizes na tabela (ou seja, em relação ao `gender`).

```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

***a. Releia a última query. Teste-a. Explique o resultado com as suas palavras***

Resposta: Essa query imprime uma tabela com a quantidade de elementos por gênero. 

***b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética.***

```sql
select id, name from Actor_Table order by name asc;
```

***c. Faça uma query que retorne todos os atores ordenados pelo salário***

```sql
select id, name from Actor_Table order by salary asc;
```

***d. Faça uma query que retorne os atores com os três maiores salários***

```sql
select id, name from Actor_Table order by salary asc limit 3;
```

***e. Faça uma query que retorne a média de salário por gênero***

```sql
select avg (salary) from Actor_Table order by gender;
```

### 🎟 **Exercício 6-  Ações na tabela de filme**

***a. Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.*** 

```sql
alter table Filmes add column playing_limit_date date ;
```

***b. Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.***

```sql
alter table Filmes change rating rating int;
```

***c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído***

```sql
update Filmes set playing_limit_date = "2021-12-30" where id = "001";
```

***d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique***

*.*

```sql
delete from Filmes where id ="002";
```

### 🎟 **Exercício 7-  Ações na tabela de filme**

***a. Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?***

```sql
select count(*)from Filmes where rating > 7;
```

***b. Qual a média das avaliações dos filmes?***

```sql
select avg(rating) from Filmes;
```

***c. Qual a quantidade de filmes em cartaz?***

```sql
select count(*) from Filmes where playing_limit_date > CURDATE();
```

***d. Qual a quantidade de filmes que ainda irão lançar?***

```sql
select count(*) from Filmes where releaseDate > CURDATE();
```

***e. Qual a maior nota dos filmes?***

```sql
select max(rating)  from Filmes;
```

***f. Qual a menor nota dos filmes?***

```sql
select min(rating) from Filmes;
```

### 🎟 **Exercício 8-  Ações na tabela de filme**

***a. Retorne todos os filmes em ordem alfabética.***

```sql
select * from Filmes order by movieName ASC;
```

***b. Retorne  os 5 primeiros filmes em ordem decrescente alfabética.***

```sql
select * from Filmes order by movieName desc limit 5;
```

***c. Retorne os 3 filmes mais recente em cartaz.***

```sql
select * from Filmes order by releaseDate desc limit 3;
```

***d. Retorne os 3 filmes mais bem avaliados.***

```sql
select * from Filmes order by rating desc limit 3;
```

### **Referências**

[https://www.diegobrocanelli.com.br/mysql/comandos-basicos-mysql-no-terminal/#:~:text=Listar as tabelas do banco,Exemplo de resultado](https://www.diegobrocanelli.com.br/mysql/comandos-basicos-mysql-no-terminal/#:~:text=Listar%20as%20tabelas%20do%20banco,Exemplo%20de%20resultado).

[Como alterar dados de uma tabela no MYSQL (Cláusula UPDATE)](https://www.diegomacedo.com.br/como-alterar-dados-de-uma-tabela-no-mysql-clausula-update/)

[MySQL UPPER - Convert a String to Uppercase](https://www.mysqltutorial.org/mysql-string-functions/mysql-upper/)

[MySQL cheatsheet](https://devhints.io/mysql)

[MySQL - Funções de Agregação (MAX, MIN, AVG, COUNT, SUM)](http://www.bosontreinamentos.com.br/mysql/mysql-funcoes-de-agregacao-max-min-avg-count-sum-18/)

[Tutorial MySQL - Adicionar uma coluna a uma tabela [ Passo a Passo ]](https://techexpert.tips/pt-br/mysql-pt-br/mysql-adicionar-uma-coluna-a-uma-tabela/)

