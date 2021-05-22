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
        const reqBody: User = {
            name : req.body.name,
            cpf : req.body.cpf,
            totalValue :req.body.totalValue,
            birthYear:req.body.birthYear,
            statement:req.body.statement
        }
        users.push(reqBody)
        res
        .status(200)
        .send({message:'Client criated!'})
        console.table(users)
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