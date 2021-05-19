// 1-Inicializar o servidor com o express com a importação do express e a criação da const app = express()
// 2- Configurar middleware cors e app.use => Importar o cors e chamar o app.use(express.json()) e o app.use(cors())
// 3- Colocar para escutar a porta e criar o servidor => 
// const server = app.listen(process.env.PORT || 3003, () => {});
// 5- Criar as condições de resposta do servidor 
//  if (server) {
    // const address = server.address() as AddressInfo ;
    // console.log(`Server is running in http://localhost: ${address.port}`);
    // } else {
    // console.error(`Failure upon starting server.` );
    // }
// 4- Criar os endpoints de requisição não esquecer de importar { Request, Response } 
// app.get('/countries/all' , (req: Request, res: Response ) => {
//         res.
//         status(200).
//         send(result)
//     })

// 5-Criar a condição da sua busca o resultado que vc deseja obter de resposta
// const result = countries.map(country => ({
//             id: country.id,
//             name: country.name
//         }))
        
// ******************************************************* ENDPOINT 1 ************************************************************

// import express, { Request, Response } from 'express'
// import cors from 'cors'
// import { countries } from './countries'
// import { AddressInfo } from "net";
// const app = express()

//     app.use(express.json())
//     app.use(cors())

//     app.get('/countries/all' , (req: Request, res: Response ) => {
//         const result = countries.map(country => ({
//             id: country.id,
//             name: country.name
//         }))
        
//         res.
//         status(200).
//         send(result)
//     })

//     const server = app.listen(process.env.PORT || 3003, () => {
//         if (server) {
//         const address = server.address() as AddressInfo ;
//         console.log(`Server is running in http://localhost: ${address.port}`);
//         } else {
//         console.error(`Failure upon starting server.` );
//         }
//     });

// ******************************************************* ENDPOINT 2 ************************************************************

import express, { Request, Response } from 'express'
import cors from 'cors'
import { countries } from './countries'
import { AddressInfo } from "net";

const app = express()

    app.use(express.json())
    app.use(cors())

    app.get('/countries/:id' , (req: Request, res: Response ) => {
        const id = req.params.id
        res.
        status(200).
        send(countries.find((countries=> countries.id)))
    })

    const server = app.listen(process.env.PORT || 3003, () => {
        if (server) {
        const address = server.address() as AddressInfo ;
        console.log(`Server is running in http://localhost: ${address.port}`);
        } else {
        console.error(`Failure upon starting server.` );
        }
    });
