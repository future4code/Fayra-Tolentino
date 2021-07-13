# Introdução a Autenticação

Created: July 13, 2021 11:33 AM

### Ex 1 .

### **a. *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?***

Considerando que a melhor opção para IDs é ter caracteres aleatórios e de difícil descriptografar, a melhor opção, seria misturar strings e números, pois aumentaria a quantidade de combinação de ids diferentes.

### Ex1.

### *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.*

```jsx
import { v4 } from "uuid"

const id = v4();

console.log("Generated Id: ", id);
```

```jsx
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```

*a. Explique o código acima com as suas palavras.*

O código acima utiliza o knex para chamar os dados do env. A constante createUser, irá criar um usuário com id, email e senha, dentro da tabela userTableName.

*b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*

```sql
CREATE TABLE IF NOT EXISTS userTableName (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);
```

*c. Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.*