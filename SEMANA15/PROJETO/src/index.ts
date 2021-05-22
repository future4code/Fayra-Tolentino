import express , { Request, Response }from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app = express();
app.use(express.json());
app.use(cors());

// type userCount ={
//     name:string,
//     cpf:number,
//     totalValue:number,
//     birthDate:number
// }
    // // Adicionar saldo para sí mesmo
// type payYourself ={
//     valueAdd:number
//     yourselfName:string,
//     yourselfCpf:number,
// }

// // Pagar conta
// type payBuild ={
//     buildValue:number,
//     description:string,
//     payDate:number,
// }

// // Trasferência Interna 
// type internTransaction ={
//     sendValue:number,
//     senderName:string,
//     senderCpf:number,
//     sendDate:string,
//     receiverName:string,
//     receiverCpf:number
// }

enum transactionType {
    PAYYOURSELF = "PAYYOURSELF",
    INTERNSEND = "INTERNSEND", 
    INTERNRECEV = "INTERNRECEV", 
    PAYBUILD = "PAYBUILD"
}

type transaction ={
    receiverName?:string,
    receiverCpf?:number,
    value:number,
    date:number,
    description?:string,
    typeTransaction: transactionType
}

type User ={
    name:string,
    cpf:number,
    totalValue:number,
    birthYear:number,
    statement:transaction[]
}



let users:User[]=[
    {
        name: "Alice",
        cpf: 78253689080,
        totalValue: 1000,
        birthYear:1986,
        statement:[]
    },
    {
        name: "Hernando",
        cpf: 92491890011,
        totalValue: 1000,
        birthYear:1996,
        statement:[]
    },
    
]


app.post('/user',(req:Request,res:Response)=>{
    try{
        let userYear = req.body.birthYear 
        const currentYear:number = 2021
        let userAge:number = currentYear - userYear

        const reqBody: User = {
            name : req.body.name,
            cpf : req.body.cpf,
            totalValue :req.body.totalValue,
            birthYear:req.body.birthYear,
            statement:req.body.statement
        }
        
        if(userAge<18){
            throw new Error('Underage user!')
        }

        if(!req.body.name|| !req.body.cpf|| !req.body.totalValue 
            || !req.body.birthYear || !req.body.statement){
            throw new Error ('Check your profile! Please, complete all informations.')
        }

        users.push(reqBody)
        res
        .status(200)
        .send({message:'Client criated! Welcome to the LabeBank'})
        console.table(users)
    }catch(error){
        res
        .status(400)
        .send({message:error.message})
    }
})

app.get('/users',(req:Request,res:Response)=>{
    try{
        res
        .status(200)
        .send(users)
    }catch(error){
        res
        .status(400)
        .send({message:error.message})
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});