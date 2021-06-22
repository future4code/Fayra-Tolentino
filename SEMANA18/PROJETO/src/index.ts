import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import SignUp from './endpoints/signUp'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post('/signUp', SignUp)


const server = app.listen(process.env.PORT ||3003,()=>{
    if(server){
        const address = server.address() as AddressInfo 
        console.log(`server is running in http://localhost: ${address.port}`)
    }else{
        console.error(`Failure upon starting server`)
    }
})


