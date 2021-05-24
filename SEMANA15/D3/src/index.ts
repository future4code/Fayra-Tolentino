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

// import express, { Request, Response } from 'express'
// import cors from 'cors'
// import { countries } from './countries'
// import { AddressInfo } from "net";

// const app = express()

//     app.use(express.json())
//     app.use(cors())

//     app.get('/countries/:id' , (req: Request, res: Response ) => {
//         const id = req.params.id
//         res.
//         status(200).
//         send(countries.find((countries=> countries.id)))
//     })

//     const server = app.listen(process.env.PORT || 3003, () => {
//         if (server) {
//         const address = server.address() as AddressInfo ;
//         console.log(`Server is running in http://localhost: ${address.port}`);
//         } else {
//         console.error(`Failure upon starting server.` );
//         }
//     });

// ******************************************************* ENDPOINT 3  TENTATIVA 1************************************************************
// import express,{Request,Response} from 'express'
// import cors from 'cors'
// import {countries} from './countries'
// import {AddressInfo} from 'net'

// const app = express()
// app.use(express.json())
// app.use(cors())

// app.get('/countries/search',(req:Request, res:Response)=>{
    // const name = req.params.name as string
    // const capital = req.params.capital as string
    // const continent = req.params.continent as string
    // const result = countries.filter((country)=> country.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
    
    // 1. pq isso dá ruim?
    // .send(countries.find((countries=> countries.name )|| (countries=> countries.capital)||(countries=> countries.continent)))

    // if(result.length){
    //     res
    //     .status(200)
    //     .send(result)
    // }else{
    //     res
    //     .status(400)
    //     .send('Not found')
    // }

    // 2. pq isso deu ruim 2?
    // if(name){
    //     result = countries.filter((country)=> country.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
    // }else{
    //     res
    //     .status(400)
    //     .send('Not found')
    // }

// })


// app.get('/countries/search',(req:Request, res:Response)=>{
//     try{
//         if(req.params.name !== string){
//             throw new Error('Tem que ser uma string')
//         }
//         const name = req.params.name as string
//         res
//         .status(400)
//         .send((countries.find(country=>country.name === name)))
//     }catch(error){
//         console.log('Deu ruim')
//     }
// })


// app.get('/countries/search',(req:Request, res:Response)=>{}


// const server = app.listen(process.env.PORT||3003,()=>{
//     if(server){
//         const address = server.address()as AddressInfo;
//         console.log(`Server is running in https://localhost:${address.port}`)
//     }else{
//         console.log(`Failure upon starting server.`)
//     }
// })

// ******************************************************* ENDPOINT 3 ************************************************************
// import express,{Request,Response} from 'express'
// import cors from 'cors'
// import {countries} from './countries'
// import {AddressInfo} from 'net'

// const app = express()
// app.use(express.json())
// app.use(cors())

// app.get('/countries/search',(req:Request, res:Response)=>{
//     try{
//         let result: country[] = countries
//         if (req.query.name) {
//             result = result.filter(
//                 country => country.name.includes(req.query.name as string)
//             )
//         }
//         if (req.query.capital) {
//             result = result.filter(
//             country => country.capital.includes(req.query.capital as string)
//             )
//         }
//         if (req.query.continent) {
//             result = result.filter(
//             country => country.continent.includes(req.query.continent as string)
//             )
//         }
//         if(!result){
//             throw new Error ('Nenhum resultado obtido')
//         }
//         res
//         .status(200)
//         .send(result)
//     }
//     catch(error){
//         res
//         .status(400)
//         .send({message:error.message})
//     }
// })

// const server = app.listen(process.env.PORT||3003,()=>{
//         if(server){
//             const address = server.address()as AddressInfo;
//             console.log(`Server is running in https://localhost:${address.port}`)
//         }else{
//             console.log(`Failure upon starting server.`)
//         }
//     })
// ******************************************************* ENDPOINT 4 ************************************************************
import express,{Request,Response} from 'express'
import cors from 'cors'
import {countries} from './countries'
import {AddressInfo} from 'net'

const app = express()
app.use(express.json())
app.use(cors())

app.put('/countries/edit/:id',(req:Request, res:Response)=>{
    try{
        let result: country[] = countries
        if (req.query.name) {
            result = result.filter(
                country => country.name.includes(req.query.name as string)
            )
        }
        if (req.query.capital) {
            result = result.filter(
            country => country.capital.includes(req.query.capital as string)
            )
        }
        if (req.query.continent) {
            result = result.filter(
            country => country.continent.includes(req.query.continent as string)
            )
        }
        if(!result){
            throw new Error ('Nenhum resultado obtido')
        }
        res
        .status(200)
        .send(result)
    }
    catch(error){
        res
        .status(400)
        .send({message:error.message})
    }
})

const server = app.listen(process.env.PORT||3003,()=>{
        if(server){
            const address = server.address()as AddressInfo;
            console.log(`Server is running in https://localhost:${address.port}`)
        }else{
            console.log(`Failure upon starting server.`)
        }
    })