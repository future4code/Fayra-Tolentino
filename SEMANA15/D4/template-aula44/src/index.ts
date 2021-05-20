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

// import express, { Request, Response } from 'express'
// import cors from 'cors'

// const app = express()
// app.use(express.json())
// app.use(cors())

// type User = {
//     id: number,
//     name: string,
//     email: string,
//     type: string,
//     age: number
// }

// let users: User[] = [
//     {
//         id: 1,
//         name: "Alice",
//         email: "alice@email.com",
//         type: "ADMIN",
//         age: 12
//     },
//     {
//         id: 2,
//         name: "Bob",
//         email: "bob@email.com",
//         type: "NORMAL",
//         age: 36
//     },
//     {
//         id: 3,
//         name: "Coragem",
//         email: "coragem@email.com",
//         type: "NORMAL",
//         age: 21
//     },
//     {
//         id: 4,
//         name: "Dory",
//         email: "dory@email.com",
//         type: "NORMAL",
//         age: 17
//     },
//     {
//         id: 5,
//         name: "Elsa",
//         email: "elsa@email.com",
//         type: "ADMIN",
//         age: 17
//     },
//     {
//         id: 6,
//         name: "Fred",
//         email: "fred@email.com",
//         type: "ADMIN",
//         age: 60
//     }
//   ]

// app.get('/get-all-users',(req:Request,res:Response)=>{
//   try{
//     const query = req.query
//     res.status(200).send(users)
//     console.table(users)
//   }
//   catch(error){
//     res.status(404).
//     send({
//       message:error.message
//     })
//   }
// })

// app.listen(3003, () => {
//   console.log('Server is running at port 3003')
// })

// ****************************************EXERCICIO 2*********************************************

// Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade 
// `type` específica, recebendo apenas um `type` por vez. Após isso, responda:

// a. Como você passou os parâmetros de type para a requisição? Por quê?

// R: Para passar os parâmetros criei uma constante que recebe o req.params.type.toLowerCase() e  
// verifica se ele corresponde  a alguma opção do enum

// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?

// R: Para garantir que o uso seja apenas normal ou admin é nescessário colocar um enum e fazer um if
// inicial para caso não seja uma das possibilidades do enum a requisição já responde com o throw;


// 1º Faz a importação 
import express, { Request, Response } from 'express'
import cors from 'cors'


// 2º Rodar o servidor express
const app = express()
app.use(express.json())
app.use(cors())


// 5º Tipar os dados
type User = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// 4º Mock dos dados
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


// 5º Fazer a requisição

app.get('user/:type',(req:Request,res:Response)=>{
  try{

    // isso tá errado?
    
    const usersTypes = req.params.type.toLowerCase() as string
    const userAdm = UserType.ADMIN.toLowerCase()
    const userNormal = UserType.NORMAL.toLowerCase()

    if(usersTypes != userAdm || usersTypes != userNormal){
      throw new Error ('User type is not correct. Use type must be ADMIN or NORMAL')
    }

    const query = req.query
    res.status(200).send(users)
    console.table(users)
  }catch(error){
    res.status(404).
        send({
          message:error.message
  })
  }
})


// 3º Colocar as informações da porta para escutar 
app.listen(3003, () => {
    console.log('Server is running at port 3003')
  })