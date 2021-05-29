import express,{Request,Response} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import {connection} from './connection'

const app = express()

type User ={
    name:string,
    nickname:string,
    email:string
}


app.use(express.json())
app.use(cors())


//Create User

app.post('/user',async(req:Request,res:Response)=>{
    const reqBody = req.body
    try{
        
        if(!reqBody.name || !reqBody.nickname || !reqBody.email ){
            throw new Error ('Please, check your information! You need complete all! of then!')
        }
        const newUser: User = {
            name : reqBody.name,
            nickname : reqBody.nickname,
            email : reqBody.email
        }
        await connection('TodoListUser').insert(newUser)
        res.status(200).send(`User ${newUser.name} created successfully! `)

    }catch(error){
        res.status(400).send({message:error.message})
        console.log({message:error.message})
    }
})

//Update User

app.put('/user/edit/:id',async(req:Request,res:Response)=>{
    try{
        const reqBody = req.body
        if(!reqBody.name){
            throw new Error ('Please, check your information! You need complete your  user name!')
        }

        if(!reqBody.nickname){
            throw new Error ('Please, check your information! You need complete your  user nickname!')
        }

        if(!reqBody.email){
            throw new Error ('Please, check your information! You need complete your  user email!')
        }

        const userUpdate : User = {
            name : reqBody.name,
            nickname : reqBody.nickname,
            email : reqBody.email
        }
        const idParams = req.params.id
        await connection('TodoListUser').update(userUpdate).where({id:idParams})
        res.status(200).send(`User ${userUpdate.name} updated successfully! `)

    }catch(error){
        res.status(400).send({message:error.message})
        console.log({message:error.message})
    }
})

//Get User by Id

app.get('/user/:id',async(req:Request,res:Response)=>{
    if(!req.params.id){
        throw new Error('User id is required!Please, insert the id you wish to search!')}
    try{
        const idParams = req.params.id
        const result = await connection('TodoListUser').select('id','name').where({id:idParams})
        res.send(result)
    }catch(error){
        res.status(400).send({message:error.message})
        console.log({message:error.message})
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})