# Aula 45 - Exercícios banco de dados e introdução ao SQL - 🎟 Sistema de Cinema

### 🎫 Exercício 1 - Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo (que possui as opções `female` e `male`).

```sql
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

***a. Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.***

Os comandos existentes são **Varchar, primary key, not null e date.** Cada um deles têm como principal função:

- **[Varchar](http://www.macoratti.net/11/03/sql_nv1.htm)** →  É utilizado para representar uma sequência de caracteres de tamanho variado. Esse comando têm algumas variações como : **Varchar(n)** → Máximo 8000 caracteres |  **Varchar(max)** →  Máximo 1.073.741.824 caracteres . ***Portanto o número que vai após o varchar é a quantidade máxima de caracteres que aquele determinado campo pode receber***;

- **[Primary Key](https://www.devmedia.com.br/sql-aprenda-a-utilizar-a-chave-primaria-e-a-chave-estrangeira/37636#:~:text=A%20chave%20prim%C3%A1ria%2C%20ou%20primary,que%20n%C3%A3o%20receber%C3%A1%20valores%20repetidos.)** → É uma propriedade usada para organização das tabelas, cuja a sua principal função é ser um identificador único para dados que não receberam informações repetidas. Essas variáveis precisam seguir algumas **características:  1- Não ter o valor null | 2- Ter apenas uma e somente uma | 3- Não se deve passar esse valor, mas sim será determinado pelo banco de dados | 4-  Deverá na tabela haver um elemento que se relacione aquela determinada chave;**

- **[Not Null](https://www.turtlelearning.com/manSQL/Oracle/ddl/notnull.htm#:~:text=A%20restri%C3%A7%C3%A3o%20NOT%20NULL%20garante,ao%20preenchimento%20de%20um%20campo.)** →  É uma variável de restrição, cujo o principal foco é verificar e garantir que uma determinada coluna não admita o valor null. **Ou seja, obrigatoriedade do preenchimento do campo**;

- **[Date](https://www.devmedia.com.br/funcoes-de-data-no-sql-server/1946)** →  **É um comando para determinar a estrutura do formato de data e hora.** É possível  utilizar funções para: verificar data hora, modificar data hora, validar data e hora,

****

***b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.***

Foi possível identificar os seguintes resultados:

- **Show Databases** → Retorna o nome e **informações dos banco de dados** que cada usuário possuí;

![show database](https://user-images.githubusercontent.com/52434685/119409570-dd259280-bcbd-11eb-84d0-d3c233e1807e.PNG)

- **Show Tables** → Retorna a **lista de todas as tabelas existentes** no banco de daos atualmente ativo;

![show tables](https://user-images.githubusercontent.com/52434685/119409583-e44ca080-bcbd-11eb-858b-369d40d3856a.PNG)


***c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.***

O resultado obtido ao utilizar o comando Describe Nome_da_tabela, são as **propriedades da tabela** como o tipo dos dados e o nome dos mesmos.

![describe](https://user-images.githubusercontent.com/52434685/119409614-f3cbe980-bcbd-11eb-9cf9-db9fcf10259c.PNG)


### 🎫 Exercício 2 - O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

Atente-se a 3 fatos nessa query:

1. A ordem dos valores (`VALUES`) é definida pela lista colocada depois do nome da tabela (`ACTOR`): `(id, name, salary, birth_date)`.
2. Os valores `VARCHAR` (strings) devem ser indicados com `"`
3. As datas seguem o padrão: `YYYY-MM-DD`

***a. Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963***

```sql
INSERT INTO Actor_Table (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Peres",
  1200000 ,
  "1963-08-23", 
  "famale"
);
```

***b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.***

Ao tentar criar um novo elemento com um mesmo id, retorna o seguinte erro, falando que não se pode criar uma chave duplicada:

```sql
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
```

***Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta***

c- **Erro :**  A quantidade de colunas declaradas não correspondem a quantidade de valores atribuidos

```sql
Error Code: 1136. Column count doesn't match value count at row 1

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d -  **Erro:** Não reconhece pois falta o campo de nome

```sql
Error Code: 1364. Field 'name' doesn't have a default value

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```

e-  **Erro:**  A quantidade de colunas não corresponde a quantidade declarada

```sql
Error Code: 1136. Column count doesn't match value count at row 1

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

```

### 🎫 Exercício 3 - Com os dados criados, podemos nos aventurar nas queries de seleção de dados. Elas são indicadas pelo operador `SELECT`.

Talvez a query mais famosa que existe é:

```sql
SELECT * FROM Actor
```

Ela faz com que se **retornem todas as colunas (ou "informações") de todas as linhas (ou "entradas")** da nossa tabela. 

Se quisermos **limitar as colunas, devemos indicar assim logo após o operador `SELECT`.** Abaixo, está uma query que retorna somente o `id`e o `salário`de todos os atores

```sql
SELECT id, salary from Actor 
```

Agora, se quisermos colocar uma condição para retornar as **linhas (entradas), devemos usar o operador `WHERE` e colocar a nossa condição que pode usar alguns operadores (`=`, `!=`, `>`, etc).** Abaixo, está uma query que retorna somente o id e o nome dos atores.

```sql
SELECT id, name from Actor WHERE gender = "male"
```

*a. Escreva uma query que retorne todas as informações das atrizes*

```sql
SELECT id, name from Actor_Table WHERE gender = "female"
```

*b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*

```sql
SELECT salary from Actor_Table WHERE name = "Tony Ramos"
```

*c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*

```sql
SELECT * from Actor_Table WHERE gender = "invalid"
```

*d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*

```sql
select name,id from Actor_Table where salary <= 5000.00
```

*e.* T*ente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*

**Erro:** O nome da variável está diferente ao que foi declarado

```sql

Error Code: 1054. Unknown column 'nome' in 'field list'

SELECT id, nome from Actor WHERE id = "002"

//CORREÇÃO

SELECT id, name from Actor_Table WHERE id = "002"
```

### 🎫 Exercício 4 - Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:

- **cujos nomes começam com "A" ou "J";**
- **cujos salários são maiores do que R$300.000**

Para fazer a primeira parte, vamos usar o comparador `LIKE`, que permite comparar strings. Para verificar se uma palavra começa com a letra "A", usamos a sintaxe: `LIKE "A%"` porque `%` indica uma string genérica. O operador "ou" é indicado por `OR`. Assim, a primeira condição é indicada por: `WHERE name LIKE "A%" OR name LIKE "J%"`. 

Já a segunda parte é simples: `salary > 300000`. O que pode confundir é o operador lógico "e" (`AND`). A ideia aqui é que todos os atores terão o salário maior do que R$300.000, mas seus nomes poderão começar com o "A" ou "J". Dessa forma, a query vai ficar dessa forma (preste atenção nos parênteses):

```sql
SELECT * FROM Actor_Table
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

Assim como o `LIKE` existem os operadores: 

- `BETWEEN`: permite verificar se um valor está entre dois: `BETWEEN valor1 AND valor2`.
- `NOT`: que indica uma negação de comparação. Pode ser usado antes de outros operadores como: `NOT LIKE`, `NOT BETWEEN`

***a. Explique com as suas palavras a query acima***

A query acima irá realizar um filtro, que deverá selecionar da tabela Actor_Table  e nos retornar as informações onde o nome inicie com A ou J e que tenha um salário superior a 300000

***b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00***

```sql
SELECT * FROM Actor_Table WHERE (name  NOT LIKE "A%") AND salary > 350000
```

***c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.*** 

```sql
SELECT * FROM Actor_Table WHERE (name LIKE "%g%" OR name LIKE "%G%")
```

***d. Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00***

```sql
SELECT * FROM Actor_Table
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%g%" OR name LIKE "%G%") 
AND salary between 350000 and 900000
```

### 🎫 Exercício 5 - Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10).

***a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. Explique a query resumidamente.***

```sql
CREATE TABLE Filmes(
id varchar(255) primary key,
moveName varchar(255) not null, 
sinopse varchar(255) not null,
releaseDate date not null, 
rating float not null
);
```

**b. Se eu fosse você**

```sql
insert into Filmes (id,moveName,sinopse,releaseDate,rating)
values(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
 7
);
```

**c. Doce Mãe** 

```sql
insert into Filmes (id,moveName,sinopse,releaseDate,rating)
values(
"002",
"Doce Mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
 10
);
```

d**. Dona Flor e seus dois maridos**

```sql
insert into Filmes (id,moveName,sinopse,releaseDate,rating)
values(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
"2017-11-02",
 7
);
```

**e. Auto da compadecida**

```sql
insert into Filmes (id,moveName,sinopse,releaseDate,rating)
values(
"005",
"Auto da Compadecida",
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver.Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
"2000-09-10",
 10
);
```

### 🎫 Exercício 6 - Escreva uma query que:

**a. Retorne um filme a partir de um nome específico;**

```sql
select  id, moveName, rating from Filmes where id = "001"
```

**b. Retorne um filme a partir de um nome específico;**

```sql
select  id, rating from Filmes where moveName = "Auto da Compadecida"
```

**c. Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`**

```sql
select  id, moveName, rating from Filmes where rating > 7
```

### 🎫 Exercício 7 - Escreva uma query que:

**a. Retorna um filme cujo título contenha a palavra `vida`**

```sql
select  * from Filmes where  moveName = "Vida";
```

**b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.**

```sql
select  * from Filmes where ( moveName like "Auto%" );
```

**c.  Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`**. 

```sql
select  * from Filmes where (releaseDate < 2021 and moveName like "Auto%" or sinopse like "%Nossa Senhora%" or rating > 7 );
```

### Referências

[SQL - Varchar , NVarchar e suas variantes](http://www.macoratti.net/11/03/sql_nv1.htm)

[Como utilizar chave estrangeira e chave primária no SQL](https://www.devmedia.com.br/sql-aprenda-a-utilizar-a-chave-primaria-e-a-chave-estrangeira/37636#:~:text=A%20chave%20prim%C3%A1ria%2C%20ou%20primary,que%20n%C3%A3o%20receber%C3%A1%20valores%20repetidos)

[Restrição NOT NULL](https://www.turtlelearning.com/manSQL/Oracle/ddl/notnull.htm#:~:text=A%20restri%C3%A7%C3%A3o%20NOT%20NULL%20garante,ao%20preenchimento%20de%20um%20campo)

[Funções de data no SQL Server](https://www.devmedia.com.br/funcoes-de-data-no-sql-server/1946)

[Tipos de dados e funções de data e hora - SQL Server (Transact-SQL)](https://docs.microsoft.com/pt-br/sql/t-sql/functions/date-and-time-data-types-and-functions-transact-sql?view=sql-server-ver15#:~:text=GETUTCDATE%20(%20)-,Retorna%20um%20valor%20datetime%20que%20cont%C3%A9m%20a%20data%20e%20hora,UTC%20(Tempo%20Universal%20Coordenado))
