import express,{Request,Response} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import {connection} from './connection'
import knex from 'knex'

const app = express()

type User ={
    name:string,
    nickname:string,
    email:string
}

app.use(express.json())
app.use(cors())

app.post('/user',async(req:Request,res:Response)=>{
    const reqBody = req.body
    try{
        
        if(!req.body.name || !req.body.nickname || !req.body.email ){
            throw new Error ('Please, check your information! You need complete all! of then!')
        }
        const newUser: User = {
            name : reqBody.name,
            nickname : reqBody.nickname,
            email : reqBody.email
        }
        await connection('TodoListUser').insert(newUser)
        res.status(200).send(`Usuário(a) ${newUser.name} criado com sucesso ! `)

    }catch(error){
        res.status(400).send({message:error.message})
        console.log({message:error.message})
    }
})

async function getUserById(id: string): Promise<any>{

	const result = await connection.raw(`
		SELECT id, nickname FROM TodoListUser
        WHERE id = "${id}"
	`);
	return result[0];
}

app.get('/user/:id',async(req:Request,res:Response)=>{
    try{
        const id = req.params.id
        const result = await getUserById(id)
        res.send(result)
    }catch(error){
        res.status(400).send({message:error.message})
        console.log({message:error.message})
    }
})




app.get('/user/:id',(req:Request,res:Response)=>{
    try{
        const id = req.params.id

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