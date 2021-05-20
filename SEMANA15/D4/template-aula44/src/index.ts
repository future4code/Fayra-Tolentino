// ****************************************TESTE*********************************************

// import express, { Request, Response } from 'express'
// import cors from 'cors'

// type User = {
//   id: number,
//   name: string,
//   email: string,
//   type: string,
//   age: number
// }

// // Mock simulando um array de usuários no Banco de Dados
// let users: User[] = [
//   {
//       id: 1,
//       name: "Alice",
//       email: "alice@email.com",
//       type: "ADMIN",
//       age: 12
//   },
//   {
//       id: 2,
//       name: "Bob",
//       email: "bob@email.com",
//       type: "NORMAL",
//       age: 36
//   },
//   {
//       id: 3,
//       name: "Coragem",
//       email: "coragem@email.com",
//       type: "NORMAL",
//       age: 21
//   },
//   {
//       id: 4,
//       name: "Dory",
//       email: "dory@email.com",
//       type: "NORMAL",
//       age: 17
//   },
//   {
//       id: 5,
//       name: "Elsa",
//       email: "elsa@email.com",
//       type: "ADMIN",
//       age: 17
//   },
//   {
//       id: 6,
//       name: "Fred",
//       email: "fred@email.com",
//       type: "ADMIN",
//       age: 60
//   }
// ]

// const app = express()
// app.use(express.json())
// app.use(cors())

// // Para testar se o servidor está tratando os endpoints corretamente
// app.get("/ping", (req: Request, res: Response) => {
//   res.status(200).send("pong!")
// })

// app.listen(3003, () => {
//   console.log('Server is running at port 3003')
// })

// ****************************************EXERCICIO 1*********************************************
// Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. 
// A lista está disponível abaixo.

// a. Qual método HTTP você deve utilizar para isso?
// R: Como queremos pegar uma lista de todos os usuários, o método indicado seria o get.

// b. Como você indicaria a entidade que está sendo manipulada?
// R: A entidade que está sendo manipulada é o array de pessoas, portanto indicaria a entidade
//  como  /get-all-users

import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

type User = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
  ]

app.get('/get-all-users',(req:Request,res:Response)=>{
  try{
    const query = req.query
    res.status(200).send(users)
    console.table(users)
  }
  catch(error){
    res.status(404).
    send({
      message:error.message
    })
  }
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

