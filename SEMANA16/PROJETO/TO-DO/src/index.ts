import express,{Request,Response} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'

const app = express()

type User ={
    name:string,
    nickname:string,
    email:string
}

let users: User[]=[
    {
        name:'Angela Montenegro',
        nickname:'Montenegro',
        email:'montenegro@jeffersonian.com'
    },
    {
        name:'Jack Hodgins',
        nickname:'Hodgins',
        email:'hodgins@jeffersonian.com'
    }
]


app.use(express.json())
app.use(cors())

app.post('/user',(req:Request,res:Response)=>{
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
        
        users.push(newUser)
        res.status(200).send(newUser)
        console.log(newUser)

    }catch(error){
        res.status(400).send({message:error.message})
        console.log('Deu ruim')
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